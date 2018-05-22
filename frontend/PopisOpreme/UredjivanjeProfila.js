
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native';

export default class UredjivanjeProfila extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            id: '',
            username1: '',
            username2: '',
            password1: '',
            password2: ''
        }
    }

    sendData = () => {

        try {
            if ((this.state.username === '' && this.state.username1 !== '' )) throw new Error("Niste unijeli staro korisničko ime");
            if ((this.state.username2 === '' && this.state.username1 !== '' )) throw new Error("Niste potvrdili novo korisničko ime");
            if ((this.state.username1 === '' && this.state.username2 !== '' )) throw new Error("Niste unijeli novo korisničko ime");
			if ((this.state.username !== '' && (this.state.username1 === '' || this.state.username2 === ''))) throw new Error("Niste unijeli novo korisničko ime");

            if ((this.state.password === '' && this.state.password1 !== '' )) throw new Error("Niste unijeli staru šifru");
            if ((this.state.password2 === '' && this.state.password1 !== '' )) throw new Error("Niste potvrdili novu šifru");
            if ((this.state.password1 === '' && this.state.password2 !== '' )) throw new Error("Niste unijeli novu šifru");
			if ((this.state.password !== '' && (this.state.password1 === '' || this.state.password2 === ''))) throw new Error("Niste unijeli novu šifru");

            if ((this.state.username1 !== this.state.username2)) throw new Error("Korisnička imena se ne poklapaju");
            if ((this.state.password1 !== this.state.password2)) throw new Error("Šifre se ne poklapaju");

            fetch('http://192.168.0.16:8080/updateUser/'+this.state.id, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username1,
                    password: this.state.password1
                })
            })
                .then(res =>res.text())
                .then(res=>Alert.alert("Message",res))
                .catch((error) => {

                    Alert.alert("Error", error.message);
                });
        }
        catch (error) {
            Alert.alert("Error", error.message);
        }
    }

    render() {

        const {goBack} = this.props.navigation;

        return (
            <ScrollView style = {styles.container}>

                <View style={styles.header}>

                    <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <Text style = {styles.title}>Uredi Profil</Text>

                <View style = {styles.main}>

                    <TextInput placeholder={"Id korisnika (privremeno)"}
                               style = {{fontSize:15, height: 40, marginTop: 25}}
                               onChangeText = {(Id) => this.setState({id: Id})}/>

                    <TextInput placeholder={"Staro korisničko ime"}
                               style = {{fontSize:15, height: 40, marginTop: 25}}
                               onChangeText = {(uname) => this.setState({username: uname})}/>
                    <TextInput placeholder={"Novo korisničko ime"}
                               style = {{fontSize:15, height: 40}}
                               onChangeText = {(uname) => this.setState({username1: uname})}/>
                    <TextInput placeholder={"Potvrdi korisničko ime"}
                               style = {{fontSize:15, height: 40}}
                               onChangeText = {(uname) => this.setState({username2: uname})}/>

                    <TextInput secureTextEntry={true} placeholder={"Stara šifra"}
                               style = {{fontSize:15, height: 40, marginTop: 50}}
                               onChangeText = {(pass) => this.setState({password: pass})}/>
                    <TextInput secureTextEntry={true} placeholder={"Nova šifra"}
                               style = {{fontSize:15, height: 40}}
                               onChangeText = {(pass) => this.setState({password1: pass})}/>
                    <TextInput secureTextEntry={true} placeholder={"Potvrdi šifru"}
                               style = {{fontSize:15, height: 40}}
                               onChangeText = {(pass) => this.setState({password2: pass})}/>

                    <TouchableOpacity style={styles.button} onPress={this.sendData}>
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
