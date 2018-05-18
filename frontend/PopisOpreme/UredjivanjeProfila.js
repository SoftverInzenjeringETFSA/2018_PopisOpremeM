
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    ScrollView,
    Alert
} from 'react-native';
import { Button } from 'react-native-elements';

export default class UredjivanjeProfila extends Component {

    render() {
        return (
            <ScrollView style = {styles.container}>
                <Text style = {styles.title}>Uredi Profil</Text>

                <View style = {styles.main}>

                    <TextInput placeholder={"Staro korisničko ime"} style = {{fontSize:15, height: 40, marginTop: 25}}/>
                    <TextInput placeholder={"Novo korisničko ime"} style = {{fontSize:15, height: 40}}/>
                    <TextInput placeholder={"Potvrdi korisničko ime"} style = {{fontSize:15, height: 40}}/>

                    <TextInput secureTextEntry={true} placeholder={"Stara šifra"} style = {{fontSize:15, height: 40, marginTop: 50}}/>
                    <TextInput secureTextEntry={true} placeholder={"Nova šifra"} style = {{fontSize:15, height: 40}}/>
                    <TextInput secureTextEntry={true} placeholder={"Potvrdi šifru"} style = {{fontSize:15, height: 40}}/>

                    <Button containerViewStyle = {{width: '100%', marginLeft: 0, marginTop: 50}}
                            buttonStyle = {{backgroundColor: '#4facff', height: 40}}
                            title = {'Sačuvaj'}/>

                    <Button containerViewStyle = {{width: '100%', marginLeft: 0, marginBottom: 30, marginTop: 10}}
                            buttonStyle = {{backgroundColor: '#dd1c20', height: 40}}
                            title = {'Odustani'}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
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
