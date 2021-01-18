import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet  } from 'react-native'

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { user } = this.props;
        const user_style = user ? styles.user_message : styles.dest_message;
        return (
            <View style={[styles.message_container, {justifyContent: user ? 'flex-end' : 'flex-start'}]}>
                <View style={[styles.message_box, user_style]}>
                    <Text style={[styles.message_text, user_style]}>
                        Youyou Ma bigote lwoifdoi grjrgjrg igrigr
                        fgoe dijgodj rogjido rjg od rigj doij grdr gdr
                        dr gd rg drg drg
                    </Text>
                </View>
            </View>
        )
    }
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    message_container: {
        flexDirection: 'row',
        
    },
    message_box: {
        flex: 0.7,
        margin: '3%',
        padding: '3%',
        borderRadius: 15,
    }
    ,
    message_text: {
        fontSize: 16,
    },
    user_message: {
        backgroundColor: '#737580',
        color: '#FFF',
        justifyContent: 'flex-end',
        borderBottomRightRadius: 0,

    },
    dest_message: {
        backgroundColor: '#E2E6EA',
        color: '#000',
        borderBottomLeftRadius: 0
    }   
}) 
