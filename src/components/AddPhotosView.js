import React, { Component } from 'react';
import { Text, TouchableHighlight, View, StyleSheet, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';

class AddPhotosView extends Component {

takePicture() {
    // const options = {};
    // //options.location = ...
    // this.camera.capture({ metadata: options })
    //   .then((data) => console.log(data))
    //   .catch(err => console.error(err));
    const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

/**
* The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */
ImagePicker.launchImageLibrary(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source = { uri: response.uri };

    // You can also display the image using data:
    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      avatarSource: source
    });
  }
});
  }

	render() {
		return (
			<View style={styles.container}>
				<Camera
					ref={(cam) => {
					this.camera = cam;
					}}
					style={styles.preview}
					aspect={Camera.constants.Aspect.fill}>
					<TouchableHighlight 
					style={styles.capture} 
					onPress={this.takePicture.bind(this)}
					>
						<Text> [CAPTURE] </Text>
					</TouchableHighlight>
				</Camera>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 40
  }
});

export default AddPhotosView;
