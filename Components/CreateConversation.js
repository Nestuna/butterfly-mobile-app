import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

import { theme } from '../Style/Theme'
import { setConversation} from '../API/ApiData'

export default class CreateConversation extends Component {
    constructor(props) {
        super(props);
        this.inputs = {
            nb_users: '',
            lifespan: ''        
        }
        this.state = {
            conversationId: undefined
        }
    }

    _createConversation = () => {
        setConversation(this.inputs);
        // this._getConversationAccessId().then((id) => this.setState({conversationId : id})); 
    }

    _displayConversationId = () => {
        if (this.state.conversationId) {
            return (
                <Text style={theme.text}>
                    Conversation ID: {this.state.conversationId}
                </Text>
            );
        }
    }


    _getConversationAccessId = () => {

    }

    render() {
        return (
            <View style={theme.main_container}>
                <TextInput 
                        style={theme.text_input}
                        placeholder={'Nombre de participants'}
                        onChangeText={(text) => {this.inputs.nb_users = text;}}
                />
                <TextInput 
                        style={theme.text_input}
                        placeholder={'Durée de vie (jours)'}
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
                {this._displayConversationId()}
            </View>
        )
    }
}
