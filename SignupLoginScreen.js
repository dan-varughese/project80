import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, TextInput, Alert} from 'react-native';
import db from '../config.js';
import firebase from 'firebase';

export default class SignupLoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',

        }
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput 
                    style = {styles.formTextInput}
                    placeholder="email"
                    keyboardType="email-address"
                    onChangeText={(text)=>{this.setState({username: text})}}
                    />
                    <TextInput
                    style = {styles.formTextInput}
                    placeholder="password"
                    onChangeText={(text)=>{this.setState({password: text})}}
                    />
                    <TouchableOpacity 
                    style = {styles.button}
                    onPress = {()=>{this.userSignup(this.state.username, this.state.password)}}>
                        <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style = {styles.button}
                    onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}>
                        <Text style = {styles.buttonText}> Log In </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

userLogin=(username, password)=> {
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
        return Alert.alert('Successfully logged in')
    })
    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
    })
}

userSignUp=(username, password)=> {
    firebase.auth().createUserWithEmailAndPassword(username, password)
    .then((response)=>{
        return Alert.alert("User added Successfully")
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)

    })
}


const styles = StyleSheet.create({
    formTextInput: {
        width: "75%",
        height: 35,
        alignItems: 'center',
        borderColor: "black",
        borderRadius: 10,
        borderWidth:1,
        marginTop: 20,
        padding: 10,
    },
    button: {
        width: "75%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'black',
    },

})

export default SignupLoginScreen;