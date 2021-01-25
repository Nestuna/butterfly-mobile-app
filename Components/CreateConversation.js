import React, { Component } from 'react'
<<<<<<< HEAD
import { View, TextInput, TouchableOpacity, Alert, Keyboard , Clipboard} from 'react-native'
// import Clipboard from '@react-native-community/clipboard';
=======
import { View, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
>>>>>>> vincent-branch
import { Text } from 'react-native-elements'
import * as SecureStore from 'expo-secure-store';

import { theme } from '../Style/Theme'
import { setConversation } from '../API/ApiData'

export default class CreateConversation extends Component {
    constructor(props) {
        super(props);
        this.inputs = {
<<<<<<< HEAD
            pseudo: '',
            lifespan: ''        
=======
            lifespan: ''
>>>>>>> vincent-branch
        }
        this.state = {
            conversationAccessId: undefined
        }
    }

<<<<<<< HEAD

    _copyToClipboard = (text) => {

        Alert.alert('ID copié')
    };

    _createConversation = () => {
        Keyboard.dismiss();
        setConversation(this.inputs)
            .then((accessId) =>  {
                    this.setState({conversationAccessId: accessId})
                    Clipboard.setString(accessId);
                    console.log(this.state.conversationAccessId);
                }
            );
=======
    _createConversation = () => {
        Keyboard.dismiss();
        SecureStore.getItemAsync('login')
          .then( (pseudo) => {
            setConversation({...this.inputs, pseudo:pseudo})
              .then(
                  (accessId) =>  {
                      this.setState({conversationAccessId: accessId})
                      if (SecureStore.isAvailableAsync()) {
                          const conversationKey = 'conversation_' + accessId;
                          SecureStore.setItemAsync(conversationKey, pseudo);
                          }
                        }
                      );
        }
      )
>>>>>>> vincent-branch
    }

    _displayconversationAccessId = () => {
        if (this.state.conversationAccessId) {
            return (
                <View style={{padding: '5%'}}>
                    <Text style={[theme.text, {textAlign: 'center'}]}>
<<<<<<< HEAD
                        <Text h4 style={theme.text} >
                            Access ID: {'\n'}
                            <Text>
                                {this.state.conversationAccessId}{'\n\n'}
                            </Text>
=======
                        <Text h4 style={theme.text}>Access ID: {'\n'}
                        {this.state.conversationAccessId}{'\n\n'}
>>>>>>> vincent-branch
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
<<<<<<< HEAD
                <TouchableOpacity 
=======
                <TouchableOpacity
>>>>>>> vincent-branch
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
