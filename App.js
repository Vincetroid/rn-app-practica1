import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import Loader from './application/components/Loader';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/arsenal.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <Button
              onPress={imprimir}
              title="Título principal de boton"
              color="blue"
              accessibilityLabel="Help de este boton"
            />
            {/* <Loader/> */}
        </View>
      </ImageBackground>
    );
  }
}

function imprimir() {
  console.log('Imprimiendo algo del boton');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#3482C5',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
