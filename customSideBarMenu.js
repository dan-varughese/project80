import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Alert, Flatlist} from 'react-native';
import db from '../config.js';
import firebase from 'firebase';
import {DrawerItems} from 'react-navigation-drawer';

export default class customSideBarMenu extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return(
            <View style={{flex:1}}>
                <DrawerItems{...this.props}/>
                <View style={{flex:1, justifyContent: 'flex-end', paddingBottom: 30}}>
                    <TouchableOpacity style={{justifyContent: 'center', padding: 10, height: 30, width: "100%"}}
                    onPress={() => {
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}