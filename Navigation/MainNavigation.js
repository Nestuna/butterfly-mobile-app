import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { theme } from '../Style/Theme'

export default class MainNavigation extends Component {
    render() {
        return (
            <View style={theme.main_container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
