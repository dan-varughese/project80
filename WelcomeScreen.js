import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity,Alert, TextInput,} from 'react-native';
import db from '../config.js'
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            username: '',
            password: '',
            confirmPassword: '',
            isVisible: '',

        }
    }

    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={this.showModal}>
                    <Text style= {{fontSize:20, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center'}}>
                        Register </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

userSignup=(username,password,confirmPassword) => {
    if(password !== confirmPassword) {
        return Alert.alert("Your password and confirmation do not match")
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)        
        })
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(username,password)
        .then((response)=>{
            db.collection('users').add({
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                phone_number: this.state.phoneNumber,
                username: this.state.username,
                address: this.state.address,
            })
        })
        return Alert.alert(
            'User added successfully',

        [
            {text:'OK', onPress: ()=> this.setState({"isVisible": false})},
        ]       
        );
    }
   


}


showModal=()=>{
    <Modal style={{animationType='slide', transparent = true, visible = this.state.isVisible}}>
        <TextInput
        style = {styles.formTextInput}
        placeholder={"First Name"}
        maxLength ={8}
        onChangeText={(text)=>{this.setState({firstName: text})}}/>
        <TextInput
        style = {styles.formTextInput}
        placeholder={"Last Name"}
        maxLength ={8}
        onChangeText={(text)=>{this.setState({lastName: text})}}/>
        <TextInput
        style = {styles.formTextInput}
        placeholder={"Phone Number"}
        maxLength ={10}
        keyboardType = 'number'
        onChangeText={(text)=>{this.setState({phoneNumber: text})}}/>
        <TextInput
        style = {styles.formTextInput}
        placeholder={"Address"}
        multiLineText = {true}
        onChangeText={(text)=>{this.setState({address: text})}}/>
        <TextInput
        style = {styles.formTextInput}
        placeholder={"Email"}
        keyboardType = 'email'
        maxLength ={8}
        onChangeText={(text)=>{this.setState({username: text})}}/>
        <TextInput
        style = {styles.formTextInput}
        placeholder={"Password"}
        maxLength ={8}
        onChangeText={(text)=>{this.setState({password: text})}}/>
    </Modal>
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
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },

})
