
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
import UnosStavke from './UnosStavke';
import Modifikacija from './Modifikacija';

class InventurneStavke extends Component {
    
    state={
        name:'',
        id:'',
        kolicina:'',
        date:'',
        value:''
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <View style={styles.name}>

                    <Text style={styles.title2}>InventurneStavke</Text>

                </View>

                <View style={styles.body}>

                    <View style={styles.search}>

                        <TextInput style={styles.searchtext} placeholder='Pretraga po barkodu'/>

                       
                        <TouchableOpacity style={styles.SearchButton}>
                            
                            <Text style = {styles.buttonText}>
                                 PRETRAŽI
                            </Text>

                        </TouchableOpacity>
               
                    
                    </View>

                    <View style={styles.list}>
                        <Text style = {styles.ListView}>Ime:</Text>

                        <Text style = {styles.ListView}>Barkod:</Text>

                        <Text style = {styles.ListView}>Kolicina:</Text>

                        <Text style = {styles.ListView}>Datum kupovine:</Text>

                        <Text style = {styles.ListView}>Vrijednost:</Text>

                    </View>

                    <View style={styles.controls}>

                    <TouchableOpacity style={styles.button} onPress={() => navigate('UnosStavke')}>
                            
                            <Text style = {styles.RedButtonText}>
                                 DODAJ 
                            </Text>
                            <Text style = {styles.RedButtonText}>
                                STAVKU
                            </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigate('Modifikacija')}>
                            
                            <Text style = {styles.RedButtonText}>
                                 UREDI
                            </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                            
                            <Text style = {styles.RedButtonText}>
                                 OTPIŠI
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
        flex:0.55,
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
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 10
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
    body:{
        flex:0.8,
        alignItems : 'center',
        justifyContent:'flex-start'
    },
    SearchButton:{
        backgroundColor:'#569add',
        flex:0.35,
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
        margin:3
    },
    RedButtonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'white'
    },
    search:{
        flex:0.1,
        flexDirection:'row',
        alignItems : 'center',
        justifyContent:'flex-start',
    },
    button:{
        backgroundColor:'#4587f9',
        flex:0.25,
        height:40,
        alignItems : 'center',
        justifyContent:'center',
        margin:3
    }
});

var MyScreens=StackNavigator({
    InventurneStavke:{screen: InventurneStavke},
    Modifikacija:{screen: Modifikacija},
    UnosStavke:{screen: UnosStavke}
    },
   
    {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        }
       }
    );
    
    export default MyScreens;

