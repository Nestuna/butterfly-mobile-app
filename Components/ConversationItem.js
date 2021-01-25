// ./Components/ConversationItem.js

import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import {
    View, StyleSheet, TextInput, Dimensions, TouchableOpacity
} from 'react-native'
import { Text } from 'react-native-elements'
import { theme } from '../Style/Theme'

export default class ConversationItem extends Component {
    render() {
      const conversation = this.props.conversation

    return (
      <View styles={styles.header_container}>
        <View style={theme.conversation}>
          <Text style={styles.text_id}>ID : {conversation}</Text>
        </View>
      </View>
    )
    }
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    header_container : {
        flex: 1,
        height: 190,
        flexDirection: 'row'
    },
    text_id : {
      fontSize : 17,
      fontWeight : "bold"
    },
    text_message : {
      fontSize : 16
    }
})
