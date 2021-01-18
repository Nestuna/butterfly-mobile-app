import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
import { Text } from 'react-native-elements'
import * as SecureStore from 'expo-secure-store';

import { theme } from '../Style/Theme'
import { setConversation } from '../API/ApiData'

export default class CreateConversation extends Component {
    constructor(props) {
        super(props);
        this.inputs = {
            pseudo: '',
            lifespan: ''        
        }
        this.state = {
            conversationAccessId: undefined
        }
    }

    _createConversation = () => {
        Keyboard.dismiss();
        setConversation(this.inputs)
            .then(
                (accessId) =>  {
                    this.setState({conversationAccessId: accessId})
                    if (SecureStore.isAvailableAsync()) {
                        const conversationKey = 'conversation_' + accessId;
                        SecureStore.setItemAsync(conversationKey, this.inputs.pseudo);
                        SecureStore.getItemAsync(conversationKey).then((pseudo) => {
                            if (pseudo === this.state.pseudo) console.error('Error: access Id not stored successfully');
                        })

                    }
                }
            );
    }

    _displayconversationAccessId = () => {
        if (this.state.conversationAccessId) {
            return (
                <View style={{padding: '5%'}}>
                    <Text style={[theme.text, {textAlign: 'center'}]}>
                        <Text h4 style={theme.text}>Access ID: {'\n'}
                        {this.state.conversationAccessId}{'\n\n'}
                        </Text>
                        <Text h5 style={theme.text}> 
                            L'access ID est ce qui permettra à vos interlocuteur de rejoindre la conversation.
                            Notez-le bien.    
                        </Text>
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={theme.main_container}>
                <TextInput 
                        style={theme.text_input}
                        placeholder={'Mon pseudo'}
                        onChangeText={(text) => {this.inputs.pseudo = text;}}
                />
                <TextInput 
                        style={theme.text_input}
                        placeholder={'Durée de vie (jours)'}
                        keyboardType= {'numeric'}
                        onChangeText={(text) => {this.inputs.lifespan = text;}}
                />
                <TouchableOpacity 
                    style={theme.button}
                    onPress= {() => this._createConversation()}
                >
                    <Text h4 style={[theme.text]}>
                        Créer
                    </Text>
                </TouchableOpacity>
                {this._displayconversationAccessId()}
            </View>
        )
    }
}
