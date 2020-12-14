// ./Components/Login

import React, { Component } from 'react'
import { 
    Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity 
} from 'react-native'
import { theme } from '../Style/Theme'

export default class Login extends Component {
    render() {
        return (
            <>
                <View style={styles.header_container}>
                    <Text style={[theme.text, theme.big_title]}>Butterfly</Text>
                </View>
                <View style={styles.body_container}>
                    <TextInput 
                        style={theme.text_input}
                        placeholder={'Login'}
                    >

                    </TextInput> 
                    <TextInput 
                        style={theme.text_input}
                        placeholder={'Mot de passe'}    
                    >
                    </TextInput> 
                    <TouchableOpacity 
                        style={theme.button}
                    >
                        <Text style={[theme.text, theme.title]}>
                            Se connecter
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    header_container : {
        flex: 1,
        // borderColor: '#000',
        // borderWidth: 3
    },
    body_container: {
        flex: 5,
        // borderColor: '#000',
        // borderWidth: 3
    }
})
