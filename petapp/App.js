import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.btn}>
        <Text style={styles.btnText}>Report missing pet</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btn}>
        <Text style={styles.btnText}>Search missing pets</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#C1D90B',
    width: '70%',
    marginBottom: 16,
    padding: 16,
    borderRadius: 5,
    shadowOffset: { width: 5, height: 10, },
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
});
