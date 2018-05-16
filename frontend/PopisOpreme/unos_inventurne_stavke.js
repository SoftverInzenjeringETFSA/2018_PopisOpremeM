import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import { BarCodeScanner, Permissions, Constants, Expo } from 'expo';

class unosStavkeHome extends React.Component{

  render(){
    const {navigate}= this.props.navigation;
    const {state} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Unos inventurne stavke
        </Text>
        <View style={styles.skenirajbtn}>
            <Button title={'SKENIRAJ'} onPress = {()=>navigate('Profile')} />
        </View>
        <View style={styles.barkod}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 2, textAlign:'center'}}
              placeholder={'*barkod*'}
              editable={false}
              maxLength = {12}
            />
        </View>
        <View style={styles.rucniunosbtn}>
            <Button
              title={'RUČNI UNOS'}
            />
        </View>
        <View style={styles.barkod}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 2, textAlign:'center'}}
              placeholder={'*barkod*'}
              editable={false}
              maxLength = {12}
            />
        </View>
         <View style={styles.evidentirajbtn}>
            <Button
              title={'EVIDENTIRAJ INVENTURNU STAVKU'}
              color="#008000"
            />
        </View>
      </View>
    );
  }
}

class barcodeScannerScreen extends React.Component{
  state = {
    hasCameraPermission: null,
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    Alert.alert(
      'Alert',
      `Bar code with type ${type} and data ${data} has been scanned!`,
      [
        {text: 'OK', onPress: ()=>navigate('Home'/*, {text: data}*/)},
      ],
      { cancelable: false }
    )
  }
}

const NavigationApp=StackNavigator({
  Home: {screen: unosStavkeHome, title: 'Unos inventurne stavke'},
  Profile: {screen: barcodeScannerScreen, title:'Scan'},
});

type Props = {};
export default class unos_inventurne_stavke extends Component<Props> {
  render() {
    return <NavigationApp />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  skenirajbtn: {
    width: 300,
    marginTop: 50,
  },
  rucniunosbtn: {
    width: 300,
    marginTop: 50,
  },
  evidentirajbtn: {
    width: 300,
    marginTop: 60,
  },
  barkod: {
    marginTop: 50,
    width: 250,
  }
});
