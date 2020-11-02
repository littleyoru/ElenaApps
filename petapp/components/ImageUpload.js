import React from 'react'
import { Image, View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'

const ImageUpload = (props) => {
  console.log('image props ', props)
  return (
    <View style={styles.container}>
      {props.image && (
        <Image source={{ uri: props.image.uri }} style={styles.image} />
      )}
      <TouchableHighlight onPress={props.onClick} style={styles.btnContainer}>
        <View>
          <Icon name='upload' type='foundation' color='#D4AF37' />
          <Text>Upload picture</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    // minHeight: 40,
    alignSelf: 'center',
    margin: 10
  },
  image: {
    // flex: 0.9,
    // resizeMode: 'center',
    width: null,
    height: 300
  }
})

export default ImageUpload;
