import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Obrisi extends Component{

    constructor(props){
        super(props);

        this.state={
            id:this.props.navigation.state.params.id
        };
    }    
    
    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <View style={styles.name}>

                    <Text style={styles.title2}>Obriši stavku</Text>

                </View>  

                <View style={styles.container1}>    
                <Text style={styles.naslov}>
                    Potvrdi brisanje stavke
                </Text>
                <Text style={styles.Text}>
                    Nako što potvrdite brisanje 
                </Text>
                <Text style={styles.Text}>
                    stavka će biti trajno obrisana.
                </Text>
                </View>

                <View style={styles.rowbutton}>

                    <TouchableOpacity style={styles.button} onPress={()=>fetch("http://192.168.169.2:8080/deleteItem/"+this.state.id,{method:'delete'}).then(res =>res.text()).then(res=>{
                        alert(res);
                        goBack();
                        })}>
                    
                       
            
             
                                
                                <Text style = {styles.RedButtonText}
                            >
                                    OBRIŠI
                                </Text>

                    </TouchableOpacity>
                        
                 </View>
                 <View style={styles.rowbutton}> 
                    <TouchableOpacity style={styles.redButton} onPress={() => goBack()}>
                                
                                <Text style = {styles.RedButtonText}>
                                    ODUSTANI
                                </Text>

                    </TouchableOpacity>
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
    button:{
        backgroundColor:'#4587f9',
        width: '90%',
        height:40,
        alignItems : 'center',
        justifyContent:'center',
        marginTop:30
    },
    redButton:{
        backgroundColor:'#dd1c20',
        width: '90%',
        height:40,
        alignItems : 'center',
        justifyContent:'center',
    },
    RedButtonText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },
    rowbutton:{

        width: '100%',
        flexDirection:'row',
        alignItems : 'center',
        justifyContent:'center',
        margin: 5
    }
});
