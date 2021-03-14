import react from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Alert} from 'react-native';
import db from '../config.js';
import firebase from 'firebase';

export default class ExchangeScreen extends Component {
    constructor() {
        super();
        this.state = {
            itemName: '',
            description: '',
            userName: '',

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                <TextInput
                style={styles.formTextInput}
                placeholder="Item Name"
                onChangeText={(text)=>{this.setState({
                    itemName: text,
                })}}
                value={this.state.item_name}/>
                <TextInput
                style={styles.formTextInput}
                placeholder="Why do you want it?"
                multiLineText = {true}
                onChangeText={(text)=>{this.setState({
                    description: text,
                })}}
                value={this.state.item_description}/>

                <TouchableOpacity
                style={styles.button, {marginTop: 10}}
                onPress={()=>{this.addItem(this.state.itemName, this.state.description)}}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold',}}>Add Item</Text>
                </TouchableOpacity>
                </View>

            </View> 
        )
    }
}

addItem=(itemName,description)=>{
    var userName = this.state.userName
    db.collection("exchange_requests").add({
        "username" : userName,
        "item_name" : itemName,
        "description" : description,
    })
    this.setState({
        itemName: '',
        description: '',
    })

    return Alert.alert(
        'Item ready to exchange',
        '',
        [
            {text: "OK", onPress: () => {
                this.props.navigation.navigate('HomeScreen')
            }}
        ]
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    formTextInput: {
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
    },
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
        },
        
})