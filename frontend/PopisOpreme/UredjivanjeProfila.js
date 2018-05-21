
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';

export default class UredjivanjeProfila extends Component {

    render() {

        const {goBack} = this.props.navigation;

        return (
            <ScrollView style = {styles.container}>

                <View style={styles.header}>

                    <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <Text style = {styles.title}>Uredi Profil</Text>

                <View style = {styles.main}>

                    <TextInput placeholder={"Staro korisničko ime"} style = {{fontSize:15, height: 40, marginTop: 25}}/>
                    <TextInput placeholder={"Novo korisničko ime"} style = {{fontSize:15, height: 40}}/>
                    <TextInput placeholder={"Potvrdi korisničko ime"} style = {{fontSize:15, height: 40}}/>

                    <TextInput secureTextEntry={true} placeholder={"Stara šifra"} style = {{fontSize:15, height: 40, marginTop: 50}}/>
                    <TextInput secureTextEntry={true} placeholder={"Nova šifra"} style = {{fontSize:15, height: 40}}/>
                    <TextInput secureTextEntry={true} placeholder={"Potvrdi šifru"} style = {{fontSize:15, height: 40}}/>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Sačuvaj</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.redButton} onPress={() => goBack()}>
                        <Text style={styles.btnText}>Odustani</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    btnText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },
    button:{
        backgroundColor:'#4587f9',
        width: '100%',
        height:40,
        alignItems : 'center',
        justifyContent:'center',
        marginTop:30
    },
    redButton:{
        backgroundColor:'#dd1c20',
        width: '100%',
        height:40,
        alignItems : 'center',
        justifyContent:'center',
        marginTop:10,
        marginBottom: 30
    },
    title1:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    header:{
        height: '7%',
        backgroundColor: '#2d63b7' ,
        alignItems : 'flex-start',
        justifyContent:'center',
        marginBottom: 10
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        color: '#2d63b7'
    },
    main: {
        flex: 1,
        padding: 20,
        flexDirection: 'column'
    }
});
