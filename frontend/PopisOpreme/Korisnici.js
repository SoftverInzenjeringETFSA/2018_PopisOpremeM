
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation'

export default class Korisnici extends Component {

    state={
        ime:'',
        id:'',
        prezime:'',
        username:'',
        email:''
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <View style={[styles.name, styles.top]}>

                    <Text style={styles.title2}>Korisnici</Text>

                    <TouchableOpacity style={{width: '60%',
                                            height:40,
                                            backgroundColor:'#4587f9',
                                            alignItems : 'center',
                                            justifyContent:'center',
                                            margin:3}}>
                        <Text style = {styles.RedButtonText}>
                            DODAJ KORISNIKA
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.body}>

                    <View style={styles.search}>

                        <TextInput style={styles.searchtext} placeholder='Pretraga po korisničkom imenu'/>


                        <TouchableOpacity style={styles.SearchButton}>

                            <Text style = {styles.buttonText}>
                                PRETRAŽI
                            </Text>

                        </TouchableOpacity>


                    </View>

                    <View style={styles.list}>
                        <Text style = {styles.ListView}>Ime:</Text>

                        <Text style = {styles.ListView}>Prezime:</Text>

                        <Text style = {styles.ListView}>Username:</Text>

                        <Text style = {styles.ListView}>Email:</Text>
                        
                    </View>

                    <View style={styles.controls}>

                        <TouchableOpacity style={[styles.button, {backgroundColor: "#05b557"}]}>

                            <Text style = {styles.RedButtonText}>
                                DODIJELI
                            </Text>
                            <Text style = {styles.RedButtonText}>
                                ZADATAK
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>

                            <Text style = {styles.RedButtonText}>
                                UREDI
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.redButton}>

                            <Text style = {styles.RedButtonText}>
                                OBRIŠI
                            </Text>

                        </TouchableOpacity>

                    </View>

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
    controls:{
        flex:0.2,
        flexDirection:'row',
        alignItems : 'center',
        justifyContent:'flex-start'
    },
    list:{
        flex:0.7,
        marginTop:10,
        alignItems : 'flex-start',
        justifyContent:'center'
    },
    ListView:{
        fontSize:16,
        margin:5,
        marginLeft:25,
        fontWeight:'bold',
    },
    searchtext:{

        width: '70%',
        fontSize:15
    },
    header:{
        flex:0.1,
        backgroundColor: '#2d63b7' ,
        alignItems : 'flex-start',
        justifyContent:'center'
    },
    title1:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    name:{

        width: '100%',
    },
    top: {

        padding: 10,
        width: '100%',
        flexDirection: 'row'
    },
    title2:{
        color:'#2d63b7',
        fontSize: 35,
        width: '40%',
        textAlign: 'center'
    },
    body:{

        flex: 1,
        padding: 10,
        alignItems : 'center',
        justifyContent:'flex-start'
    },
    SearchButton:{
        backgroundColor:'#569add',
        width: '30%',
        height:35,
        alignItems : 'center',
        justifyContent:'center',
        margin:7
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    },
    redButton:{
        backgroundColor:'#dd1c20',
        flex:0.25,
        height:40,
        alignItems : 'center',
        justifyContent:'center',
        margin:3,
    },
    RedButtonText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },
    search:{

        width: '100%',
        padding: 10,
        flexDirection:'row',
        alignItems : 'center',
        justifyContent:'flex-start',
    },
    button:{
        backgroundColor:'#4587f9',
        flex:0.35,
        height:40,
        alignItems : 'center',
        justifyContent:'center',
        margin:3
    }
});

