// ./Components/Login

import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { 
    View, StyleSheet, TextInput, Dimensions, TouchableOpacity 
} from 'react-native'
import { Text } from 'react-native-elements'
import { theme } from '../Style/Theme'
import * as SecureStore from 'expo-secure-store';
import { KeyboardAvoidingView } from 'react-native';
import { Alert } from 'react-native';

import { checkLogin } from '../API/localStorage'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.credentials = {
            login: '',
            password: '',
        }
    }

    _goTo = (destination, params) => {
        this.props.navigation.navigate(destination, params)
    }

    _connect = () => {
        checkLogin(this.credentials.login, this.credentials.password).then((response) => {
            if (response) {
                this._goTo('create_conversation');
            } else {
                Alert.alert('Login ou mot de passe incorrect.')
            }
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={theme.main_container}>
                <View style={styles.body_container}>
                    <TextInput 
                        style={theme.text_input}
                        placeholder={'Login'}
                        onChangeText={(text) => {this.credentials.login = text;}}
                    />
                    <TextInput 
                        secureTextEntry={true}
                        style={theme.text_input}
                        placeholder={'Mot de passe'}    
                        onChangeText={(text) => {this.credentials.password = text;}}
                    />

                    <TouchableOpacity 
                        style={theme.button}
                        onPress= {() => this._connect()}
                    >
                        <Text h4 style={theme.text}>
                            Se connecter
                        </Text>
                    </TouchableOpacity>

                        <Text h4 
                            style={[theme.text, {color: '#DDD', textAlign:'center'}]}
                            onPress={() => this._goTo('create_login')}
                        >
                            Créer un compte
                        </Text>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    body_container: {
        flex: 1,
    }
})
