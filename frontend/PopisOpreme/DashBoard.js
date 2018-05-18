
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import UnosStavke from './UnosStavke';
import Modifikacija from './Modifikacija';
import InventurneStavke from'./InventurneStavke';
import UredjivanjeProfila from './UredjivanjeProfila';
import Registracija from './Registracija';
import Korisnici from './Korisnici';
import Help from './help'


class DashBoard extends Component {

   
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <View style={styles.name}>

                    <Text style={styles.title2}>DashBoard</Text>

                </View>

                <View style={styles.body}>

                   
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('UredjivanjeProfila')}>
                    <Text style = {styles.buttonText}>
                        PROFIL
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style = {styles.buttonText} onPress={() => navigate('Korisnici')}>
                        KORISNICI
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('InventurneStavke')}>
                    <Text style = {styles.buttonText}>
                        INVENTURNE STAVKE   
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Registracija')}>
                    <Text style = {styles.buttonText}>
                        REGISTRACIJA
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style = {styles.buttonText}>
                        INVENTURE
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style = {styles.buttonText}>
                        IZVJEŠTAJI
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Help')}>
                    <Text style = {styles.buttonText}>
                        HELP
                    </Text>
                </TouchableOpacity>
                </View>


                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.redButton}>
                    <Text style = {styles.RedButtonText}>
                        ODJAVI SE
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
        marginLeft: 10
    },
    name:{
        flex:0.2,
        alignItems : 'center',
        justifyContent:'center'
    },
    title2:{
        color:'#2d63b7',
        fontSize: 30
    },
    body:{
        flex:0.8,
        alignItems : 'center',
        justifyContent:'flex-start'
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems : 'center',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'#afb4bc',
        flex:0.85,
        height:40,
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
        flex:0.85,
        height:40,
        alignItems : 'center',
        justifyContent:'center',
        margin:7,
        marginTop:25
    },
    RedButtonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'white'
    }
});


var MyScreens=StackNavigator({
Home:{screen: DashBoard},
InventurneStavke:{screen: InventurneStavke},
UredjivanjeProfila: {screen: UredjivanjeProfila},
Registracija: {screen: Registracija},
Korisnici: {screen: Korisnici},
Help:{screen:Help}
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
);

export default MyScreens;