
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
import DatePicker from 'react-native-datepicker';

export default class UnosStavke extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dateOfPurchase: new Date(),
            quantity: '',
            value: '',
            name: '',
            description: '',
            unitOfMeasurement: 'kg',
            category: '',
            categoryId: '',
            kategorije: [],
            response: '',
            isPresent: true,
            isCorrect: true
        }
    }

    sendData = () => {

        try {
            if (this.state.name === ''
                || this.state.unitOfMeasurement === ''
                || this.state.category === ''
                || this.state.value === ''
                || this.state.quantity === '') throw new Error("Popunite polja");

            fetch('http://192.168.0.16:8080/createItem', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    description: this.state.description,
                    category: {
                        id: this.state.categoryId,
                        name: this.state.category
                    },
                    quantity: parseFloat(this.state.quantity),
                    value:  parseFloat(this.state.value),
                    dateOfPurchase: this.state.dateOfPurchase,
                    unitOfMeasurement: this.state.unitOfMeasurement,
                    isPresent: this.state.isPresent,
                    isCorrect: this.state.isCorrect
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

    componentWillMount() {

        fetch('http://192.168.0.16:8080/categories', {method: 'GET'})
            .then((res) => res.json())
            .then((data) => {
                this.setState({kategorije: data, category: data[0].name, categoryId: data[0].id});
            })
            .catch((error) => {

                Alert.alert("Error", error.message);
            });
    }

    checkQuantityInput = (text) => {
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
        this.setState({quantity: newText})
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

    render() {

        const {goBack} = this.props.navigation;

        return (
            <ScrollView style = {styles.container}>

                <View style={styles.header}>

                    <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <Text style = {styles.title}>Nova Inventurna Stavka</Text>

                <View style = {styles.main}>
                    <Text style = {styles.label}>Naziv:</Text>
                    <TextInput style = {{height: 40}}
                               onChangeText = {this.checkNameInput}
                               value = {this.state.name}/>
                    <Text style = {styles.label}
                          onChangeText = {(desc) => this.setState({description: desc})}
                    >Opis:</Text>
                    <TextInput
                        multiline = {true}
                        style = {{height: 50}}/>
                    <View style = {styles.row}>
                        <Text style = {{width: '30%', fontSize: 15, marginTop: 15}}>Količina:</Text>
                        <TextInput
                            style = {{width: '70%', height: 40}}
                            keyboardType = {'numeric'}
                            onChangeText = {this.checkQuantityInput}
                            value = {this.state.quantity}/>
                    </View>
                    <View style = {styles.row}>
                        <Text style = {{width: '30%', fontSize: 15, marginTop: 15}}>Vrijednost:</Text>
                        <TextInput
                            style = {{width: '70%', height: 40}}
                            keyboardType = {'numeric'}
                            onChangeText = {this.checkValueInput}
                            value = {this.state.value}/>
                    </View>
                    <View style = {styles.row}>
                        <Text style = {styles.label}>Kategorija:</Text>
                        <Picker
                            mode = "dropdown"
                            style = {{
                                backgroundColor: '#cdd2d6',
                                height: 40,
                                width: '60%',
                                marginTop: 10,
                                color: '#111'
                            }}
                            selectedValue = {this.state.category}
                            onValueChange = {(itemValue, itemIndex) => this.setState({category: itemValue, categoryId: itemValue})}>
                            {this.state.kategorije.map((item, i) => {
                                return (<Picker.Item label={item.name} value={item.id} key={i}/>)
                            })}
                        </Picker>
                    </View>
                    <View style = {styles.row}>
                        <Text style = {styles.label}>Mjerna jedinica:</Text>
                        <Picker
                            style = {{
                                backgroundColor: '#cdd2d6',
                                height: 40,
                                width: '60%',
                                marginTop: 10,
                                color: '#111'
                            }}
                            mode = "dropdown"
                            selectedValue = {this.state.unitOfMeasurement}
                            onValueChange = {(itemValue, itemIndex) => this.setState({unitOfMeasurement: itemValue})}>
                            <Picker.Item label = "kg" value = "1"/>
                            <Picker.Item label = "m" value = "2"/>
                            <Picker.Item label = "kom" value = "3"/>
                        </Picker>
                    </View>
                    <View style = {styles.row}>
                        <Text style = {styles.label}>Datum kupovine:</Text>
                        <DatePicker
                            style = {{backgroundColor: '#cdd2d6', width: '60%', marginTop: 10}}
                            date = {this.state.dateOfPurchase}
                            mode = "date"
                            placeholder = "Select date"
                            format = "YYYY-MM-DD"
                            minDate = "2015-01-01"

                            customStyles = {{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {

                                    marginLeft: 35
                                }
                            }}
                            onDateChange = {(date) => {
                                this.setState({dateOfPurchase: date})
                            }}
                        />
                        </View>
                    <View style={styles.row}>

                        <Text style={styles.label}>Ispravna:</Text>

                        <Picker style = {{
                            backgroundColor: '#cdd2d6',
                            height: 40,
                            width: '60%',
                            marginTop: 10,
                            color: '#111'
                        }}
                                mode="dropdown"
                                selectedValue={this.state.isCorrect}
                                onValueChange={(itemValue, itemIndex) => this.setState({isCorrect: itemValue})}>
                            <Picker.Item label="True" value={true} />
                            <Picker.Item label="False" value={false} />

                        </Picker>


                    </View>

                    <View style={styles.row}>

                        <Text style={styles.label}>Prisutna:</Text>

                        <Picker style = {{
                            backgroundColor: '#cdd2d6',
                            height: 40,
                            width: '60%',
                            marginTop: 10,
                            color: '#111'
                        }}
                                mode="dropdown"
                                selectedValue={this.state.isPresent}
                                onValueChange={(itemValue, itemIndex) => this.setState({isPresent: itemValue})}>
                            <Picker.Item label="True" value={true} />
                            <Picker.Item label="False" value={false} />

                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.button} onPress = {this.sendData}>
                        <Text style={styles.btnText}>Kreiraj</Text>
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
        backgroundColor: '#fff'
    },
    title1:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
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
    label: {
        width: '40%',
        fontSize: 15,
        marginTop: 25,
        textAlign: 'left',
        justifyContent: 'center'
    },
    btnText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },
    main: {
        flex: 1,
        padding: 20,
        flexDirection: 'column'
    },
    row: {
		marginTop: 15,
        width: '100%',
        flexDirection: 'row'
    }
});
