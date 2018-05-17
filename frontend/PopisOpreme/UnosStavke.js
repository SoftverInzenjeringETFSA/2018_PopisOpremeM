
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
import DatePicker from 'react-native-datepicker';
import { Button } from 'react-native-elements';

export default class UnosStavke extends Component {

    sendData = async () => {

        return fetch('http://localhost:8080/createItem', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'name',
                description: 'desc',
                category: {
                    name : "kategorija",
                    description: "opis",
                    parent: null
                },
                quantity: '2',
                value: '1.22',
                dateOfPurchase: 'bla',
                unitOfMeasurement: 'crate'
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                Alert.alert("message", responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    constructor(props){
        super(props);

        this.state = {
            date:new Date().getDate() + "-"+ parseInt(new Date().getMonth()+1) +"-"+ new Date().getFullYear(),
            quantity: '',
            value: '',
            category: '',
            unit: '',
            name: ''
        }
    }

    checkQuantityInput = (text) => {
        let newText = '';
        let numbers = '0123456789.';
        let dot = 0;

        for (var i = 0; i < text.length; i++) {

            if(i === 0 && text[i] === '.') continue;
            if(dot === 1 && text[i] === '.') continue;

            if ( numbers.indexOf(text[i]) > -1 ) {

                if(text[i] === '.') dot = 1;
                newText = newText + text[i];
            }
        }
        this.setState({quantity: newText})
    }

    checkNameInput = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if ( numbers.indexOf(text[i]) === -1 ) {
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

            if(i === 0 && text[i] === '.') continue;
            if(dot === 1 && text[i] === '.') continue;

            if ( numbers.indexOf(text[i]) > -1 ) {

                if(text[i] === '.') dot = 1;
                newText = newText + text[i];
            }
        }
        this.setState({value: newText})
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>New Inventory Item</Text>
                <View style={styles.main}>
				<Text style={styles.label}>Name:</Text>
                    <TextInput style={{height: 40}}
                               onChangeText={this.checkNameInput}
                               value={this.state.name}/>
                    <Text style={styles.label}>Description:</Text>
                    <TextInput
                        multiline = {true}
						style={{height: 50}}/>
                    <View style={styles.row}>
                        <Text style = {{width: '30%', fontSize: 15, marginTop: 15}}>Quantity:</Text>
                        <TextInput
                            style = {{ width: '70%', height: 40}}
                            keyboardType = {'numeric'}
                            onChangeText={this.checkQuantityInput}
                            value={this.state.quantity}/>
                    </View>
                    <View style={styles.row}>
                        <Text style = {{width: '30%', fontSize: 15, marginTop: 15}}>Value:</Text>
                        <TextInput
                            style = {{ width: '70%', height: 40}}
                            keyboardType = {'numeric'}
                            onChangeText={this.checkValueInput}
                            value={this.state.value}/>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Category:</Text>
                        <Picker
                            mode="dropdown"
                            style = {{ backgroundColor: '#cdd2d6', height: 40, width: '50%', marginTop: 10, color: '#111'}}
                            selectedValue={this.state.category}
                            onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
                            <Picker.Item label="Category 1" value="1" />
                            <Picker.Item label="Category 2" value="2" />
                            <Picker.Item label="Category 3" value="3" />
                            <Picker.Item label="Category 4" value="4" />
                            <Picker.Item label="Category 5" value="5" />
                        </Picker>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Unit of measurement:</Text>
                        <Picker
                            style = {{backgroundColor: '#cdd2d6', height: 40, width: '50%', marginTop: 10, color: '#111'}}
                            mode="dropdown"
                            selectedValue={this.state.unit}
                            onValueChange={(itemValue, itemIndex) => this.setState({unit: itemValue})}>
                            <Picker.Item label="Unit 1" value="1" />
                            <Picker.Item label="Unit 2" value="2" />
                            <Picker.Item label="Unit 3" value="3" />
                            <Picker.Item label="Unit 4" value="4" />
                            <Picker.Item label="Unit 5" value="5" />
                        </Picker>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Date of purchase:</Text>
                        <DatePicker
                            style = {{backgroundColor: '#cdd2d6', width: '50%', marginTop: 10}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Select date"
                            format="DD-MM-YYYY"
                            minDate="01-01-2015"
                            
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
								
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                    <Button containerViewStyle={{width: '100%', marginLeft: 0, marginTop: 50}}
							buttonStyle = {{backgroundColor: '#4facff', height: 40}}
							title={'Create'}
                            onPress={this.sendData.bind(this)}
                    />
                    <Button containerViewStyle={{width: '100%', marginLeft: 0, marginBottom: 50, marginTop: 10}}
                            buttonStyle = {{backgroundColor: '#dd1c20', height: 40}}
                            title={'Cancel'}/>
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
        color: '#2162bc'
    },
    label: {
        width: '50%',
        fontSize: 15,
        marginTop: 25,
        textAlign: 'left',
        justifyContent: 'center'
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
