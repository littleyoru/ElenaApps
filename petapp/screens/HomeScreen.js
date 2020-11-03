import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class HomeScreen extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btn} onPress={() => this.props.navigation.navigate('Report')}>
          <Text style={styles.btnText}>Report missing pet</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn}>
          <Text style={styles.btnText}>Search missing pets</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#D4AF37',
    width: '70%',
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    shadowOffset: { width: 5, height: 10, },
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FFFFFF'
  },
});

export default HomeScreen;
