// ./Components/CreateLogin

import React, { Component } from 'react'
<<<<<<< HEAD
import { Keyboard, ScrollView } from 'react-native';
import { 
    View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Alert
=======
import { ScrollView } from 'react-native';
import { 
    View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Alert 
>>>>>>> vincent-branch
} from 'react-native'
import { Text } from 'react-native-elements'
import { theme } from '../Style/Theme'
import * as SecureStore from 'expo-secure-store';
import { KeyboardAvoidingView } from 'react-native';
<<<<<<< HEAD
import { addUser } from '../API/ApiData'
=======
>>>>>>> vincent-branch

export default class CreateLogin extends Component {
    constructor(props) {
        super(props);
        this.credentials = {
<<<<<<< HEAD
            username: '',
            password: '',
            email: ''
=======
            'login': '',
            'password': ''
>>>>>>> vincent-branch
        }
        this.state = {
            info_message: '',
            isLoading: false
        }
    }

    _goTo = (destination, params) => {
        this.props.navigation.navigate(destination, params)
    }


<<<<<<< HEAD
        _createAccount () {
            Keyboard.dismiss();
            if (this.credentials.username === '' || this.credentials.password === '') {
                Alert.alert('Veuillez remplir les champs.')
            } else {
                addUser(this.credentials).then((response) => {
                    if (!response) {
                        Alert.alert("Nom d'utilisateur déjà utilisé");
                        return;
                    }
                    Alert.alert("Compte crée avec succès. Bienvenue sur Butterfly !");
                    this._storeCredentials();
                    setTimeout(() => {
                        this._goTo('home');
                    }, 2000);
                })
            }

=======
    _createAccount = () => {
        if (SecureStore.getItemAsync('login', this.credentials.login)) Alert.alert("L'ancien compte va être supprimé")
        this._storeCredentials();
        Alert.alert("Compte crée avec succès. Bienvenue sur Butterfly !");
        setTimeout(() => {
            this._goTo('home');
        }, 3000);
>>>>>>> vincent-branch
    }

    _storeCredentials = () => {
        if (SecureStore.isAvailableAsync()) {
<<<<<<< HEAD
            SecureStore.setItemAsync('login', this.credentials.username)
=======
            SecureStore.setItemAsync('login', this.credentials.login)
>>>>>>> vincent-branch
            SecureStore.setItemAsync('password', this.credentials.password)
        }
    } 

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={theme.main_container}>
                <View>
                    <TextInput 
                            style={theme.text_input}
                            placeholder={'Login'}
<<<<<<< HEAD
                            onChangeText={(text) => {this.credentials.username = text; this.credentials.email = text + '@mail.com'}}
                        >

                    </TextInput> 
                    <TextInput
=======
                            onChangeText={(text) => {this.credentials.login = text;}}
                        >

                    </TextInput> 
                    <TextInput 
>>>>>>> vincent-branch
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
                <View style={styles.text_box}>
                    <Text style={theme.text}>
                        Le compte est crée localement. Seul un compte crée sur cet appareil sera accessible. Ne pourra être utilisé qu'un 
                        seul compte par appareil. 
                        Si vous voulez utiliser un autre compte que celui crée initialement, le premier compte sera irrémédiablement supprimé,
                        avec toutes les conversations auquel il a soucscrites. Ceci est fait dans un souci de sécurité et confidentialité optimale.
                    </Text>
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
    },
    text_box: {
        width: windowWidth * 0.9,
    }
})

