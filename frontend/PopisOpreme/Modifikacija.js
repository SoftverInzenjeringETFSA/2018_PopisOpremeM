
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
    
    constructor(props){
        super(props);

        this.state={
            name:this.props.navigation.state.params.name,
            barcode:this.props.navigation.state.params.barcode,
            unitOfMesurment:this.props.navigation.state.params.unitOfMesurment,
            value:this.props.navigation.state.params.value,
            description:this.props.navigation.state.params.description,
            quantity:this.props.navigation.state.params.quantity,
            dateOfPurchase:this.props.navigation.state.params.dateOfPurchase,
            cid:this.props.navigation.state.params.cid,
            cname:this.props.navigation.state.params.cname,
            cdescription:this.props.navigation.state.params.cdescription,
            parent:this.props.navigation.state.params.parent,
            isPresent:this.props.navigation.state.params.isPresent,
            isCorrect:this.props.navigation.state.params.isCorrect
        };
    }
    
    checkNameInput = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) === -1) {
                newText = newText + text[i];
            }
        }
        this.setState({name: newText})
    }

    checkValueInput = (text) => {
        let newText = '';
        let numbers = '0123456789.';
        let dot = 0;

        for (var i = 0; i < text.length; i++) {

            if (i === 0 && text[i] === '.') continue;
            if (dot === 1 && text[i] === '.') continue;

            if (numbers.indexOf(text[i]) > -1) {

                if (text[i] === '.') dot = 1;
                newText = newText + text[i];
            }
        }
        this.setState({value: newText})
    }

    save = () => {
        const {goBack} = this.props.navigation;
            if (this.state.name === ''
                || this.state.unitOfMeasurement === ''
                || this.state.category === ''
                || this.state.value === ''
                || this.state.quantity === ''){
                    alert("Polja ne mogu biti prazna")
                }

            fetch('http://192.168.169.2:8080/updateItem/'+this.state.barcode, {
                method: 'put',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    barcode:this.state.barcode,
                    unitOfMeasurement: this.state.unitOfMeasurement,
                    value:  parseFloat(this.state.value),
                    description: this.state.description,
                    quantity: parseFloat(this.state.quantity),
                    dateOfPurchase: this.state.dateOfPurchase,
                    category: {
                        id: this.state.cid,
                        name: this.state.cname,
                        description:this.state.cdescription,
                        parent: null
                    },
                    isPresent: this.state.isPresent,
                    isCorrect: this.state.isCorrect
                })
            })
                .then(res =>res.text())
                .then(res=>alert(res))
                .then(goBack());
        
        
        
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

                <Text style={styles.rowtext1}>Naziv:</Text>
                    <TextInput style={styles.rowtext2} defaultValue= {this.state.name}  onChangeText = {this.checkNameInput}/>
       
                 </View>

                 <View style={styles.row}>

                    <Text style={styles.rowtext1}>Količina:</Text>
                    <TextInput style={styles.rowtext2} defaultValue= {String(this.state.quantity)} onChangeText = {this.checkValueInput}/>
       
                 </View>

                 <View style={styles.row}>

                    <Text style={styles.rowtext1}>Opis:</Text>
                    <TextInput style={styles.rowtext2}defaultValue= {this.state.description} multiline = {true} onChangeText = {text => this.setState({description:text})}/>

        
                 </View>

                 <View style={styles.row}>
                 
                 <Text style={styles.rowtext1}>Ispravna:</Text>

                    <Picker style={[styles.rowtext2, {backgroundColor: '#cdd2d6'}]} mode="dropdown"
                        selectedValue={this.state.isCorrect}
                        onValueChange={(itemValue, itemIndex) => this.setState({isCorrect: itemValue})}>
                        <Picker.Item label="True" value={true} />
                        <Picker.Item label="False" value={false} />
                    
                    </Picker>

                 </View>  

                 <View style={styles.row}>
                 
                    <Text style={styles.rowtext1}>Prisutna:</Text>

                    <Picker style={[styles.rowtext2, {backgroundColor: '#cdd2d6'}]} mode="dropdown"
                        selectedValue={this.state.isPresent}
                        onValueChange={(itemValue, itemIndex) => this.setState({isPresent: itemValue})}>
                        <Picker.Item label="True" value={true} />
                        <Picker.Item label="False" value={false} />
                    
                    </Picker>

                 </View>  

                 <View style={styles.rowbutton}>

                    <TouchableOpacity style={styles.button}>
                                
                                <Text style = {styles.RedButtonText} onPress={this.save}>
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
