
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Button } from 'react-native-elements';

export default class UnosStavke extends Component {

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

    checkNumberInput = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if ( numbers.indexOf(text[i]) > -1 ) {
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
            <View style={styles.container}>
                <Text style={styles.title}>New Inventory Item</Text>
                <View style={styles.main}>
                    <TextInput style={{fontSize: 15, width: '100%'}}
                               placeholder = 'Name'
                               placeholderTextColor = '#111'
                               onChangeText={this.checkNameInput}
                               value={this.state.name}/>
                    <Text style={styles.label}>Description:</Text>
                    <TextInput
                        multiline = {true} />
                    <View style={styles.row}>
                        <Text style = {{ width: '20%',  color: '#111', fontSize: 15, marginTop: 5}}>Quantity:</Text>
                        <TextInput
                            style = {{ width: '80%'}}
                            keyboardType = {'numeric'}
                            onChangeText={this.checkNumberInput}
                            value={this.state.quantity}/>
                    </View>
                    <View style={styles.row}>
                        <Text style = {{ width: '20%',  color: '#111', fontSize: 15, marginTop: 5}}>Value:</Text>
                        <TextInput
                            style = {{ width: '80%'}}
                            keyboardType = {'numeric'}
                            onChangeText={this.checkValueInput}
                            value={this.state.value}/>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Category:</Text>
                        <Picker
                            mode="dropdown"
                            style = {{ width: '50%', marginTop: 10}}
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
                            style = {{width: '50%', marginTop: 10}}
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
                            style = {{width: '50%', marginTop: 10}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Select date"
                            format="DD-MM-YYYY"
                            minDate="01-01-2015"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
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
                    <Button buttonStyle = {{marginTop: 50, width: '100%', backgroundColor: '#02724e'}} title={'Create'}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdedde',
        padding: 20
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#00281b',
        fontWeight: 'bold'
    },
    label: {
        width: '50%',
        fontSize: 15,
        marginTop: 25,
        textAlign: 'left',
        color: '#111',
        justifyContent: 'center'
    },
    main: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        flexDirection: 'column'
    },
    row: {
		marginTop: 15,
        width: '100%',
        flexDirection: 'row'
    }
});
