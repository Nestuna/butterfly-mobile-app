import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Alert, Keyboard , Clipboard} from 'react-native'
// import Clipboard from '@react-native-community/clipboard';
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

    _goTo = (destination, params) => {
        this.props.navigation.navigate(destination, params)
    }


    _copyToClipboard = (text) => {
        Alert.alert('ID copié')
    };

    _createConversation = () => {
        Keyboard.dismiss();

        SecureStore.getItemAsync('login').then(
          (pseudo) => {
            setConversation({pseudo: pseudo, lifespan: this.inputs.lifespan})
                .then((accessId) =>  {
                        this.setState({conversationAccessId: accessId})
                        Clipboard.setString(accessId);
                    //     setTimeout(() => {
                    //         this._goTo('home', {'refresh': true});
                    //     }, 3000);
                    // }
                );
          }
        )

    }

    _displayconversationAccessId = () => {
        if (this.state.conversationAccessId) {
            return (
                <View style={{padding: '5%'}}>
                    <Text style={[theme.text, {textAlign: 'center'}]}>
                        <Text h4 style={theme.text} >
                            Access ID: {'\n'}
                            <Text>
                                {this.state.conversationAccessId}{'\n\n'}
                            </Text>
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
