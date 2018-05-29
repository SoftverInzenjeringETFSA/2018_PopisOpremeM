import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity
} from 'react-native';

export default class Izvjestaji extends Component{



    dohvati= () =>{
        fetch("http://192.168.169.2:8080/otpis",{method:'get'}).then(res => res.text()).then(res => alert(res));
        
    }
    


    render() {
                
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <View style={styles.name}>

                    <Text style={styles.title2}>Izvještaji</Text>

                </View>  

                <View style={styles.container1}>
               
                </View>
               
               
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    container1: {
        flex: 0.7,
        backgroundColor: 'white',
        alignItems : 'center',
        justifyContent:'center'
    },
   
    header:{
        flex:0.1,
        backgroundColor: '#2d63b7' ,
        alignItems : 'flex-start',
        justifyContent:'center'
    },
    title1:{
        color:'white',
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom:10
    },
    name:{
        flex:0.1,
        alignItems : 'center',
        justifyContent:'center'
    },
    title2:{
        color:'#2d63b7',
        fontSize: 30
    },
    naslov:{
        fontWeight:'bold',
        fontSize:18,
        margin:10
    },
    Text:{
        fontSize:15,
       
    },
    
    rowbutton:{

        width: '100%',
        flexDirection:'row',
        alignItems : 'center',
        justifyContent:'center',
        margin: 5
    }
});
