import React, { Component , useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { View, StyleSheet, Dimensions, KeyboardAvoidingView, Modal, Alert } from 'react-native'
import { Text, Header } from 'react-native-elements'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import { getMessagesFromApi, postMessageToApi, deleteConversation } from '../API/ApiData'
import { theme } from '../Style/Theme'

import Message from './Message';

export default class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversationIsAlive: true,
            admin : undefined,
            messages: [],
            access_id: '',
            onDelete: false
        }

        this.messageToSend = {
            username : '',
            text : '',
            accessId: ''
        }

    }

    componentDidMount() {
      this.setState({accessId: this.props.accessId},
          () => {this._getMessages();
                  this.messageToSend.accessId = this.props.accessId;
      console.log(this.state);
      })
    }

    _goTo = (destination, params) => {
        this.props.navigation.navigate(destination, params)
    }

    _getMessages = () => {
        getMessagesFromApi(this.state.access_id).then((data) => {
            if (data) {
                console.log(data);
                this.setState({admin: data.creator_pseudo, messages: data.messages});
            }
            else { this.setState({ conversationIsAlive: false }); }
        });
    }
    _sendMessage = () => {
        postMessageToApi(this.messageToSend).then(this._getMessages());
    }

    _displayDeleteButton = () => {
        if (this.messageToSend.username === this.state.admin) {
            return (
                <TouchableOpacity
                    style = {styles.send_button}
                    onPress = {() => this.setState({onDelete: true})}
                >
                    <Text style={theme.text}>Supprimer la conversation</Text>
                </TouchableOpacity>
            )
        }
    }


    _warningModal = () => {
        if (this.state.onDelete) {
            return (
                <View style = {styles.centeredView}>
                    <Modal
                        visible={this.state.onDelete}
                        transparent={true}
                    >
                        <View style = {styles.centeredView}>
                            <View style = {styles.modalView}>
                                <Text style={theme.text}>
                                    La conversation va être supprimé définitivement pour vous, et ses participants.
                                    Confirmez-vous ? {'\n'}{'\n'}
                                </Text>
                                <TouchableOpacity onPress={() => this._deleteConversation()}>
                                    <Text h4 style= {theme.text}>
                                        Oui{'\n'}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({onDelete: false})}>
                                    <Text h4 style={theme.text}>
                                        Non
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </Modal>
                </View>
            )
        }

    }

    _deleteConversation = () => {
        deleteConversation({access_id: this.state.access_id}).then(() => {
            Alert.alert("Compte supprimé");
            this.setState({onDelete: false})
            setTimeout(() => {
                this._goTo('home');
            }, 2000);
        })
    }
    _display = () => {
        if (this.state.conversationIsAlive) {
            return (
                <FlatList
                data={this.state.messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem = {({item}) => {
                    return(
                      <Message
                        isUser={this.messageToSend.username === item.username}
                        username={item.username}
                        text={item.text} />
                    );
                  }
                }
            />
            )
        } else {
            return (<Text h4 style={{textAlign: 'center'}}> La conversation est expirée ou supprimée par son créateur.</Text>)
        }
    }

    render() {
        return (
            <View style={theme.main_container}>
                <View>{this._displayDeleteButton()}</View>
                {this._warningModal()}
                <View style={styles.chat_body}>
                    {this._display()}
                </View>
                <KeyboardAvoidingView
                    style={styles.chat_send}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TextInput style= {styles.message_input}
                        multiline={true}
                        onChangeText={text => this.messageToSend.text = text}
                    />
                    <TouchableOpacity style={styles.send_button} onPress= {() => this._sendMessage()}>
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
        paddingTop: '5%',
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
        alignItems: 'center',
        borderRadius: 3
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
      },
    modalView: {
        margin: 20,
        backgroundColor: "#535360",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
        },
})
