// ./Components/CreateLogin

import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { 
    View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Alert 
} from 'react-native'
import { Text } from 'react-native-elements'
import { theme } from '../Style/Theme'
import * as SecureStore from 'expo-secure-store';
import { KeyboardAvoidingView } from 'react-native';

export default class CreateLogin extends Component {
    constructor(props) {
        super(props);
        this.credentials = {
            'login': '',
            'password': ''
        }
        this.state = {
            info_message: '',
            isLoading: false
        }
    }

    _goTo = (destination, params) => {
        this.props.navigation.navigate(destination, params)
    }


    _createAccount = () => {
        this._storeCredentials();
        if (this._storageIsGood()) {
            Alert.alert('Compte crée avec succès. Bienvenue sur Butterfly !');
            setTimeout(() => {
                this._goTo('home');
            }, 3000);
        } else {
            this.setState({info_message: 'Une erreur s\'est produite lors de la création du compte. Veuillez réessayer.'})
        }

    }

    _storeCredentials = () => {
        if (SecureStore.isAvailableAsync()) {
            SecureStore.setItemAsync('login', this.credentials.login)
            SecureStore.setItemAsync('password', this.credentials.password)
        }
    } 

    _storageIsGood = () => {
        SecureStore.getItemAsync('login').then((login) => {
            if (login !== this.credentials.login) return false;
        })
        SecureStore.getItemAsync('login').then((password) => {
            if (password !== this.credentials.password) return false;
        })

        return true;
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={theme.main_container}>
            <View style={styles.body_container}>
                <TextInput 
                    style={theme.text_input}
                    placeholder={'Login'}
                    onChangeText={(text) => {this.credentials.login = text;}}
                >

                </TextInput> 
                <TextInput 
                    secureTextEntry={true}
                    style={theme.text_input}
                    placeholder={'Mot de passe'}    
                    onChangeText={(text) => {this.credentials.password = text;}}
                >
                </TextInput> 
                <TouchableOpacity 
                    style={theme.button}
                    onPress= {() => this._createAccount()}
                >
                    <Text h4 style={theme.text}>
                        Créer
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        )
    }
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    body_container: {
        flex: 1
    },
    info_message: {
        color: '#EEE'
    },
    loading_container: 
    {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 200,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

