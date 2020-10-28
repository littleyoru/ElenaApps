import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, ScrollView } from 'react-native';
import CustomTextInput from '../components/CustomTextInput'

class ReportMissingPet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      petName: '',
      description: '',
      ownerName: '',
      ownerPhone: '',
      location: null
    }

    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText (name, value) {
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <View style={styles.form}>
        <ScrollView>
          <CustomTextInput
            placeholder='Pet Name'
            icon='paw'
            onChangeText={(text) => this.onChangeText('petName', text)}
            value={this.state.petName} />
          <CustomTextInput
            placeholder='Description'
            icon='info'
            onChangeText={(text) => this.onChangeText('description', text)}
            value={this.state.description}
            multiline
            numberOfLines={5} />
          <CustomTextInput
            placeholder='Owner Name'
            icon='torso'
            onChangeText={(text) => this.onChangeText('ownerName', text)}
            value={this.state.ownerName} />
          <CustomTextInput
            placeholder='Owner Phone'
            icon='telephone'
            onChangeText={(text) => this.onChangeText('ownerPhone', text)}
            value={this.state.ownerPhone} />
          <CustomTextInput
            placeholder='Location'
            icon='marker'
            onChangeText={(text) => this.onChangeText('location', text)}
            value={this.state.location} />
          <TouchableHighlight style={styles.btn}>
            <Text style={styles.btnText}>Report</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  form: {
    flex: 1,
    padding: 10
  },
  btn: {
    backgroundColor: '#D4AF37',
    width: '70%',
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    shadowOffset: { width: 5, height: 10, },
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    alignSelf: 'center'
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FFFFFF'
  },
})

export default ReportMissingPet;