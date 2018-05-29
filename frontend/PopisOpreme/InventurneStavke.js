
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
import obrisi from './obrisi';
import otpis from './otpisi';

class InventurneStavke extends Component {

    constructor(props) {
        super(props);

        this.state = {
           name:'',
           barcode:'',
           unitOfMesurment:'',
           value:'',
           description:'',
           quantity:'',
           dateOfPurchase:'',
           cid:'',
           cname:'',
           cdescription:'',
           parent:'',
           isPresent:'',
           isCorrect:''
        }
    }

    azuriraj= () => {
        fetch("http://192.168.169.2:8080/getItem/"+this.state.kod,{method:'get'}).then(res =>res.json()).then(res =>{
            if(res == null || res.status==400){
                this.setState({
                    barcode:'',
                    name:'',
                    description:'',
                    isPresent:'',
                    isCorrect:'',
                    value:''
            });
                alert("Ne postoji stavka sa datim barkodom");
            }
            else{
                this.setState({name: res.name, 
                    barcode:res.barcode,
                    unitOfMesurment:res.unitOfMesurment,
                    value:res.value,
                    description:res.description,
                    quantity:res.quantity,
                    dateOfPurchase:res.dateOfPurchase,
                    cid:res.category.id,
                    cname:res.category.name,
                    cdescription:res.category.description,
                    parent:res.category.parent,
                    isPresent:res.isPresent,
                    isCorrect:res.isCorrect
                });
                
                
                
               
            }
        } );
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

                        <TextInput style={styles.searchtext} keyboardType='numeric' placeholder='Pretraga po barkodu'  onChange={(event) => this.setState({kod: event.nativeEvent.text})}/>

                       
                        <TouchableOpacity style={styles.SearchButton}>
                            
                            <Text style = {styles.buttonText} onPress={this.azuriraj}>
                                 PRETRAŽI
                            </Text>

                        </TouchableOpacity>
               
                    
                    </View>

                    <View style={styles.list}>
                       <Text style={styles.ListView}>Ime stavke: {this.state.name}</Text>
                       <Text style={styles.ListView}>Barkod: {this.state.barcode}</Text>
                       <Text style={styles.ListView}>Opis: {this.state.description}</Text>
                       <Text style={styles.ListView}>Vrijednost: {this.state.value} KM</Text>
                       <Text style={styles.ListView}>Prisutna: {String(this.state.isPresent)}</Text>
                       <Text style={styles.ListView}>Ispravna: {String(this.state.isCorrect)}</Text>




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

                    <TouchableOpacity style={styles.button} onPress={() =>{
                         if(this.state.barcode!=''){
                            navigate('Modifikacija',{
                                name: this.state.name, 
                                barcode:this.state.barcode,
                                unitOfMesurment:this.state.unitOfMesurment,
                                value:this.state.value,
                                description:this.state.description,
                                quantity:this.state.quantity,
                                dateOfPurchase:this.state.dateOfPurchase,
                                cid:this.state.cid,
                                cname:this.state.cname,
                                cdescription:this.state.cdescription,
                                parent:this.state.parent,
                                isPresent:this.state.isPresent,
                                isCorrect:this.state.isCorrect
                            });
                            }
                            else{
                                alert("Prvo izaberite stavku");
                            }
                    }}>
                            
                            <Text style = {styles.RedButtonText}>
                                 UREDI
                            </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                            
                            <Text style = {styles.RedButtonText} onPress={() => {
                                if(this.state.barcode!=''){
                                navigate('Otpis',{id:this.state.barcode});
                                }
                                else{
                                    alert("Prvo izaberite stavku");
                                }
                                }
                            }>
                                 OTPIŠI
                            </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.redButton}>
                            
                            <Text style = {styles.RedButtonText} onPress={() =>{
                                if(this.state.barcode!=''){
                                    navigate('Obrisi',{id:this.state.barcode});
                                    }
                                    else{
                                        alert("Prvo izaberite stavku");
                                    }
                            }}>
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
        margin:10,
        fontWeight:'bold'
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
    UnosStavke:{screen: UnosStavke},
    Obrisi:{screen:obrisi},
    Otpis:{screen:otpis}
    },
   
    {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        }
       }
    );
    
    export default MyScreens;

