// ./Components/Login

import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { 
    View, StyleSheet, TextInput, Dimensions, TouchableOpacity 
} from 'react-native'
import { Text } from 'react-native-elements'
import { theme } from '../Style/Theme'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.inputs = {
            login: '',
            password: '',
        }
    }

    _goTo = (destination) => {
        this.props.navigation.navigate(destination)
    }

    render() {
        return (
            <View style={theme.main_container}>
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
                        onPress= {() => this._goTo('conversation')}
                    >
                        <Text h4 style={theme.text}>
                            Se connecter
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
