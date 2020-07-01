import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';

const styles = StyleSheet.create({
    button_first: {
        backgroundColor: 'red'
    }
})

export default class ProfilePage extends Component {
    render(){
        return (
            <View>
                <Button title="hello" style={styles.button_first}  onPress={() => {}} >
                </Button>
                <Button title="hi" onPress={() => {}}  >
                </Button>
            </View>
        )
    }
}



