import TfModel from '@/helpers/ml/TensorlfowModel';
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Button,
  Dimensions,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { captureRef } from 'react-native-view-shot';

const { height } = Dimensions.get('window');
export default function ScanNFind() {
  const [predict, setPredict] = useState('');

  // Camera Stuff & Permissions
  const cameraRef = useRef(null);
  const [facing, setFacing] = useState<CameraType>('back'); // WHICH CAMERA TO USE
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title='grant permission' />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }
  const targetPixelCount = 1080; // If you want full HD pictures
  const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
  // pixels * pixelRatio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
  const pixels = targetPixelCount / pixelRatio;

  // onPress Event handler for clicking image photo
  const captureImage = async () => {
    console.log('Capturing image...');
    setPredict('');
    try {
      const result = await captureRef(cameraRef, {
        result: 'tmpfile',
        height: pixels,
        width: pixels,
        quality: 1,
        format: 'jpg',
      });

      const answer = await TfModel(result);
      setPredict(answer);

      console.log('Captured image result:', result);
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  return (
    <View style={styles.container} ref={cameraRef}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <AntDesign name='left' size={24} color='black' />
      </TouchableOpacity>
      <CameraView style={styles.camera} facing={facing} zoom={0}></CameraView>
      <View style={styles.bottomsContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={captureImage}>
            <Ionicons name='image' size={32} color='grey' />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.centreButton]}
            onPress={captureImage}
          >
            <Ionicons name='camera' size={52} color='black' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Ionicons name='camera-reverse' size={32} color='grey' />
          </TouchableOpacity>
        </View>

        {predict === '' ? <Text>....loading</Text> : <Text>{predict}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, .45)',
    borderBlockColor: '1px solid rgba(255, 255, 255, .25)',
    borderRadius: 50,
    zIndex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingVertical: 8,
    backdropFilter: 'blur(10px)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    width: '100%',
    height: height * 0.8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bottomsContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  centreButton: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  // image: {
  //   width: 50, // Adjust as needed
  //   height: 50,
  //   resizeMode: "contain",
  // },
});
``;
