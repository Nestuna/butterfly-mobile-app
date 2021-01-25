import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
import { Text } from 'react-native-elements'
import * as SecureStore from 'expo-secure-store';

import { theme } from '../Style/Theme'
import { setConversation, putConversation } from '../API/ApiData'

export default class JoinConversation extends Component {
    constructor(props) {
        super(props);
        this.inputs = {
            pseudo: '',
            accessId: ''
        }
    }

    _goTo = (destination, params) => {
        this.props.navigation.navigate(destination, params)
    }

    _joinConversation = () => {
        SecureStore.getItemAsync('login').then(
            (pseudo) => {
              putConversation(this.inputs).then(
                this._goTo('conversation', {accessId: this.inputs.accessId, username: pseudo})
              )
            }
          )
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
                        placeholder={'Access ID'}
                        onChangeText={(text) => {this.inputs.accessId = text;}}
                />
                <TouchableOpacity
                    style={theme.button}
                    onPress= {() => this._joinConversation()}
                >
                    <Text h4 style={[theme.text]}>
                        Rejoindre
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
