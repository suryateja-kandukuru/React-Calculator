import React from 'react';
import { StyleSheet, View , StatusBar, Dimensions, SafeAreaView} from 'react-native';
import Calculator from './components/Calculator';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    marginTop: StatusBar.currentHeight,
    padding: 10
  }
});
