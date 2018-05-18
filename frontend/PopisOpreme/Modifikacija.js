
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Picker,
    ScrollView,
    Item
} from 'react-native';

export default class Modifikacija extends Component {
    
    state={
        name:'',
        kategorija:'',
        kategorije:["kategorija1","kategorija2","kategorija3"],
        ispravna:true,
        prisutna:true
    }

    
    
    render() {
        const {goBack} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <View style={styles.name}>

                    <Text style={styles.title2}>Modifikacija Stavke</Text>

                </View>

                <View style={styles.body}>

                <View style={styles.row}>

                    <TextInput style={styles.rowtext} placeholder='Naziv'/>
       
                 </View>

                 <View style={styles.row}>

                    <Text style={styles.rowtext1}>Količina:</Text>
                    <TextInput style={styles.rowtext2}/>
       
                 </View>

                 <View style={styles.row}>

                    <Text style={styles.rowtext1}>Kategorija:</Text>

                    <Picker style={[styles.rowtext2, {backgroundColor: '#cdd2d6'}]} mode="dropdown"
                        selectedValue={this.state.selected}
                        onValueChange={(itemValue, itemIndex) => this.setState({kategorija: itemValue})}>
                        {this.state.kategorije.map((item, index) => {
                        return (<Picker.Item label={item} value={index} key={index}/>) 
                    })}
                    </Picker>
       
                 </View>

                 <View style={styles.row}>
                 
                 <Text style={styles.rowtext1}>Ispravna:</Text>

                    <Picker style={[styles.rowtext2, {backgroundColor: '#cdd2d6'}]} mode="dropdown"
                        selectedValue={this.state.ispravna}
                        onValueChange={(itemValue, itemIndex) => this.setState({ispravna: itemValue})}>
                        <Picker.Item label="True" value={true} />
                        <Picker.Item label="False" value={false} />
                    
                    </Picker>


                 </View>  

                 <View style={styles.row}>
                 
                    <Text style={styles.rowtext1}>Prisutna:</Text>

                    <Picker style={[styles.rowtext2, {backgroundColor: '#cdd2d6'}]} mode="dropdown"
                        selectedValue={this.state.prisutna}
                        onValueChange={(itemValue, itemIndex) => this.setState({prisutna: itemValue})}>
                        <Picker.Item label="True" value={true} />
                        <Picker.Item label="False" value={false} />
                    
                    </Picker>

                 </View>  

                 <View style={styles.rowbutton}>

                    <TouchableOpacity style={styles.button}>
                                
                                <Text style = {styles.RedButtonText}>
                                    SAČUVAJ
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
               

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    },
    RedButtonText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },
    rowtext:{
        width: '100%',
        fontSize:15,
    },
    rowtext1:{
        width: '30%',
        fontSize:15,
    },
    rowtext2:{
        width: '70%',
    },
    row:{
        width: '100%',
        flexDirection:'row',
        alignItems : 'center',
        justifyContent:'center',
        margin: 5
    },
    rowbutton:{

        width: '100%',
        flexDirection:'row',
        alignItems : 'center',
        justifyContent:'center',
        margin: 5
    },
    header:{

        height: '7%',
        backgroundColor: '#2d63b7' ,
        alignItems : 'flex-start',
        justifyContent:'center',
        marginBottom: 10
    },
    title1:{
        color:'white',
        fontSize: 20,
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
        fontSize: 35
    },
    body:{
        flex:1,
        padding: 20,
        alignItems : 'center',
        justifyContent:'flex-start'
    }
});
