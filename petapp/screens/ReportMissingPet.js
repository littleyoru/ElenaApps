import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, ScrollView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomTextInput from '../components/CustomTextInput';
import ImageUpload from '../components/ImageUpload';
//import ImagePicker from 'react-native-image-picker'
// import ImagePicker from 'react-native-image-crop-picker';

class ReportMissingPet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      photo: null,
      petName: '',
      description: '',
      ownerName: '',
      ownerPhone: '',
      location: ''
    }

    this.onChangeText = this.onChangeText.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    this.createFormData = this.createFormData.bind(this)
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this)
  }

  onChangeText (name, value) {
    this.setState({
      [name]: value
    })
  }

  createFormData (photo, body) {
    const data = new FormData()
    console.log('form photo ', photo)

    let photoPath = photo.uri
    let name = photoPath.substring(photoPath.lastIndexOf('/') + 1, photoPath.length)
    console.log('name ', name)

    data.append('photo', {
      name: name,
      type: photo.type,
      uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', '')
    })

    console.log('data to send ', data)

    Object.keys(body).forEach(key => {
      data.append(key, body[key])
    })

    return data
  }

  handlePhotoUpload () {
    console.log('state.photo ', this.state.photo)
    fetch('http://192.168.0.118:3000/api/upload', {
      method: 'POST',
      body: this.createFormData(this.state.photo, { userId: 2 })
    })
    .then(response => response.json())
    .then(response => {
      console.log('upload success ', response)
      alert('Upload success!')
      // this.setState({ photo: null })
    })
    .catch(error => {
      console.log('upload error ', error)
      alert('Upload failed!')
    })
  }

  render () {
    const handleClick = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })
  
      console.log(result)
  
      if (!result.cancelled) {
        this.setState({
          photo: result
        })
      }
    }
    console.log('photo ', this.state.photo)

    return (
      <View style={styles.form}>
        <ScrollView>
          <ImageUpload 
            image={this.state.photo}
            onClick={handleClick} />
          <TouchableHighlight style={styles.btn} onPress={this.handlePhotoUpload}>
            <Text style={styles.btnText}>Test Upload</Text>
          </TouchableHighlight>
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