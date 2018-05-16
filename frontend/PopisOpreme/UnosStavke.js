
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
	ScrollView
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
            <ScrollView style={styles.container}>
                <Text style={styles.title}>New Inventory Item</Text>
                <View style={styles.main}>
				<Text style={styles.label}>Name:</Text>
                    <TextInput style={{backgroundColor: '#1fc496', height: 40}}
                               onChangeText={this.checkNameInput}
                               value={this.state.name}/>
                    <Text style={styles.label}>Description:</Text>
                    <TextInput
                        multiline = {true}
						style={{backgroundColor: '#1fc496', height: 80}}/>
                    <View style={styles.row}>
                        <Text style = {{width: '30%',  color: '#fff', fontSize: 15, marginTop: 15}}>Quantity:</Text>
                        <TextInput
                            style = {{ backgroundColor: '#1fc496', width: '70%', height: 40}}
                            keyboardType = {'numeric'}
                            onChangeText={this.checkNumberInput}
                            value={this.state.quantity}/>
                    </View>
                    <View style={styles.row}>
                        <Text style = {{width: '30%',  color: '#fff', fontSize: 15, marginTop: 15}}>Value:</Text>
                        <TextInput
                            style = {{ backgroundColor: '#1fc496', width: '70%', height: 40}}
                            keyboardType = {'numeric'}
                            onChangeText={this.checkValueInput}
                            value={this.state.value}/>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Category:</Text>
                        <Picker
                            mode="dropdown"
                            style = {{height: 40, width: '50%', marginTop: 10, color: '#111', backgroundColor: '#1fc496'}}
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
                            style = {{height: 40, width: '50%', marginTop: 10, color: '#111', backgroundColor: '#1fc496'}}
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
                            style = {{width: '50%', marginTop: 10, backgroundColor: '#1fc496'}}
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
                    <Button containerViewStyle={{width: '100%', marginLeft: 0, marginBottom: 50, marginTop: 50}} 
							buttonStyle = {{height: 50, backgroundColor: '#1fc496'}} 
							title={'Create'}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        padding: 10
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        color: '#1fc496',
        fontWeight: 'bold'
    },
    label: {
        width: '50%',
        fontSize: 15,
        marginTop: 25,
        textAlign: 'left',
        color: '#fff',
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
