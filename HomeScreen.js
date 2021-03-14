import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Alert, Flatlist} from 'react-native';
import db from '../config.js';
import firebase from 'firebase';



export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            allRequests: '',
            
        }
    }
    render() {
        return(
           <View>
               <Flatlist
               keyExtractor={this.keyExtractor}
               data={this.state.allRequests}
               renderItem={this.renderItem}/>
           </View>
        )
    }
}

    renderItem=({item,i})=> {
        console.log(item.item_name);
        return(
            <ListItem
            key = {i}
            title = {item.item_name}
            subtitle = {item.description}
            titleStyle ={{color: 'black', fontWeight: 'bold'}}
            rightElement = {
                <TouchableOpacity style={styles.button}>
                    <Text style = {{color: 'black', fontWeight: 'bold'}}> Exchange </Text>
                </TouchableOpacity>
            }
            bottomDivider         
            />

        )
    }

keyExtractor = (item, index) => index.toString()


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