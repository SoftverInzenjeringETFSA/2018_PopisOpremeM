
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Linking
} from 'react-native';

export default class Help extends Component {
   
    
    
    render() {
       
        return (
            <View style={styles.container}>
                 <View style={styles.header}>

                <Text style={styles.title1}>Popis Opreme</Text>

                </View>

                <View style={styles.name}>

                <Text style={styles.title2}>Help</Text>

                </View>

                <ScrollView style={{margin: 20}}>

                    <Text style={styles.naslov}>1. Opis projekta</Text>
                    <Text style={styles.Text}>
                        Cilj projekta je razvoj mobilne aplikacije za popis opreme(vršenje inventure) uz
                        web aplikaciju sa istim funkcionalnostima.
                        Što se tiče mobilne aplikacije, za njen razvoj se koristi React Native, biblioteka
                        objavljena od strane Facebook-a koja obezbjeđuje React arhitekturu iOS i android
                        aplikacijama.
                        Glavna funkcija mobilne aplikacije je vršenje inventure skeniranjem barkodova
                        koristeći kameru mobilnog uređaja i evidentiranje inventurnih stavki kako bi se
                        ubrzao proces popisa opreme.
                        Mobilna aplikacija koristi istu bazu podataka kao i web aplikacija, pa je razvoj
                        zajedničkih dijelova mobilne i web aplikacije potrebno raditi u dogovoru sa timom
                        koji razvija web aplikaciju.
                        Više o funkcionalnostima i tehnologijama koje se koriste u razvoju možete pronaći
                        u SRS dokumentu na sljedećem linku:
                        </Text>
                        <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/SoftverInzenjeringETFSA/2018_PopisOpremeM/blob/master/Dokumentacija/SRS-v1.2.pdf')}>https://github.com/SoftverInzenjeringETFSA/2018_PopisOpremeM/blob/master/Dokumentacija/SRS-v1.2.pdf</Text>
                        <Text style={styles.Text}>   
                        Potrebni dijagrami i dizajn interfejsa:
                        </Text>
                        <Text style={styles.link} onPress={() => Linking.openURL(' https://github.com/SoftverInzenjeringETFSA/2018_PopisOpremeM')}>
                        https://github.com/SoftverInzenjeringETFSA/2018_PopisOpremeM</Text>   
                        <Text style={styles.Text}>   
                            Projekat se nadovezuje na projekat iz 2016.godine:
                        </Text>
                        <Text style={styles.link}  onPress={() => Linking.openURL(' https://github.com/SoftverInzenjeringETFSA/SI2016_TIM11')}>
                            https://github.com/SoftverInzenjeringETFSA/SI2016_TIM11
                            </Text>

                        <Text style={styles.naslov}>2. Skeniranje barkoda</Text>

                        <Text style={styles.Text}>    
                            Za skeniranje barkoda korištena je React komponenta BarCodeScanner iz Expo koji
                            je „open source“ skup alata za razvoj iOS i Android aplikacija korištenjem
                            JavaScript-a i React-a.
                            Link na BarCodeScanner Expo dokumentaciju sa svim potrebnim informacijama:
                        </Text>
                        <Text style={styles.link}  onPress={() => Linking.openURL('https://docs.expo.io/versions/latest/sdk/bar-code-scanner')}>
                            https://docs.expo.io/versions/latest/sdk/bar-code-scanner
                        </Text>

                </ScrollView>
               
               
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        fontSize:18
    },
    Text:{
        fontSize:15,
        marginLeft:5
    },
    link:{
        color:'#3983f9',
        marginLeft:5
    }
});
