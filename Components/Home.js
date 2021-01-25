// ./Components/Home.js

import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { View, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList, KeyboardAvoidingView} from 'react-native'
import { Text } from 'react-native-elements'
import { theme } from '../Style/Theme'
import ConversationItem from './ConversationItem.js'
import conversation from '../Helpers/ConversationData.js'
import * as SecureStore from 'expo-secure-store';
import { getConversationList } from '../API/ApiData'

export default class Home extends Component{
  constructor(props) {
      super(props);
      this.user = {
        username : ""
      }

      this.state = {
          conversations: []
      }
  }

  componentDidMount() {
      this._getConversation().then(console.log(this.state.conversations));
  }

  _getConversation = async () => {
      SecureStore.getItemAsync('login')
        .then( (pseudo) => { getConversationList(pseudo).then( (data) => {
          this.setState({conversations : data}, console.log(this.state.conversations))
        })
      }
    )
  }

  _goTo = (destination, params) => {
      this.props.navigation.navigate(destination, params)
  }

    render(){
      return(
      <View style={theme.main_container}>
        <View style={styles.body_container}>
          <FlatList
            data={this.state.conversations}
            keyExtractor={(item) => item.toString()}
            renderItem = {({item}) => {
                return(
                  <TouchableOpacity onPress= {() => this._goTo('conversation')}>
                      <ConversationItem conversation={item}/>
                  </TouchableOpacity>
                );
              }
            }
          />
        </View>
        <View style={styles.bottom_container}>
          <View style={styles.button}>
            <TouchableOpacity onPress= {() => this._goTo('create_conversation')}>
                <Text h6 style={theme.text}> Créer une conversation </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress= {() => this._goTo('join_conversation')}>
                <Text h6 style={theme.text}> Rejoindre une conversation </Text>
            </TouchableOpacity>
          </View>
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
        flex: 11,
        padding : "3%"
        // borderColor: '#000',
        // borderWidth: 3
    },
    bottom_container: {
      flexDirection: "row",
      bottom : 10
    },
    button : {
      minWidth: windowWidth * 0.3,
      backgroundColor: '#737580',
      margin: '1%',
      padding: '3%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
    },
})
