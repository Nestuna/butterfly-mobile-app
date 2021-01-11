import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Text } from 'react-native-elements'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { theme } from '../butterfly-app/Style/Theme'

export default class Conversation extends Component {
    render() {
        return (
            <View style={theme.main_container}>
                <View style={styles.header}>
    
                </View>
                <ScrollView style={styles.chat_body}>

                </ScrollView>
                <KeyboardAvoidingView 
                    style={styles.chat_send}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}    
                >
                    <TextInput style= {styles.message_input} multiline={true} />
                    <TouchableOpacity style={styles.send_button}>
                        <Text style={theme.text}>Envoyer</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles= StyleSheet.create({
    header: {
        flex: 0.1,
        width: windowWidth * 0.9
    },
    chat_body: {
        flex : 5,
        backgroundColor: '#FFF',
        margin: '1%',
        minWidth: windowWidth * 0.97,
        height: windowHeight
    },
    chat_send: {
        backgroundColor: '#9299A3',
        padding: '1%',
        flexDirection: 'row',
        margin: '1%',
        alignItems: 'center',
        // minHeight: windowHeight * 0.05
    },
    message_input: {
        flex: 4,
        backgroundColor: '#FFF',
        margin: '0.5%',
        minHeight: windowHeight * 0.08,
        marginHorizontal: '1%',
        padding: '5%',
        fontSize: 16
    },
    send_button: {
        backgroundColor: '#737580',
        height: windowHeight * 0.05,
        padding: '1%',
        margin: '1%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})