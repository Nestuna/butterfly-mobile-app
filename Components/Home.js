// ./Components/Home.js

import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { View, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import { Text } from 'react-native-elements'
import { theme } from '../Style/Theme'
import ConversationItem from './ConversationItem.js'
import conversation from '../Helpers/ConversationData.js'

export default class Home extends Component{
  _goTo = (destination) => {
      this.props.navigation.navigate(destination)
  }

    render() {
      return(
      <View style={theme.main_container}>
        <View style={styles.header_container}>
            <Text style={[theme.text, theme.big_title]}>Butterfly</Text>
        </View>
        <View style={styles.body_container}>
          <FlatList
            data={conversation}
            keyExtractor={(item) => item.id.toString()}
            renderItem = {({item}) => {
                return(
                  <TouchableOpacity onPress= {() => this._goTo('main_navigation')}>
                      <ConversationItem conversation={item}/>
                  </TouchableOpacity>
                );
              }
            }
          />
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
    }
})
