import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { getData } from ../Api/fet.js

export default class Home extends Component {
    constructor(props) {
        this.state =  {
            conversations : []
        }
    }

    componentDidMount() {
        getData().then(() => this.setState({conversation: data})) 
    }

    render() {
        return (
            <View>
                <FlatList
                    data= {this.state.conversations}
                    () => 
                ></FlatList>
                <ListConversation conversations={[jgpokt]} />
            </View>
        )
    }
}


