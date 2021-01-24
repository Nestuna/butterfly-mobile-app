import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
import { Text } from 'react-native-elements'
import * as SecureStore from 'expo-secure-store';

import { theme } from '../Style/Theme'
import { setConversation } from '../API/ApiData'

export default class JoinConversation extends Component {
    constructor(props) {
        super(props);
        this.inputs = {
            pseudo: '',
            accessId: ''
        }
    }

    _goTo = (destination, params) => {
      SecureStore.getItemAsync('login').then(
        (pseudo) => {
          putConversation({pseudo:pseudo})
        }
      )
        this.props.navigation.navigate(destination, params)
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
                    onPress= {() => this._goTo('conversation', {accessId:this.inputs.accessId})}
                >
                    <Text h4 style={[theme.text]}>
                        Rejoindre
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
