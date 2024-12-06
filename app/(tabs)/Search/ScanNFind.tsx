import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { captureRef } from "react-native-view-shot";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
const { height } = Dimensions.get("window");

export default function ScanNFind() {
  const cameraRef = useRef(null);
  const [facing, setFacing] = useState<CameraType>("back"); // WHICH CAMERA TO USE
  // Permission contains the status anD requestPermission is a function to request the permission.
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
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  const targetPixelCount = 1080; // If you want full HD pictures
  const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
  // pixels * pixelRatio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
  const pixels = targetPixelCount / pixelRatio;

  const captureImage = async () => {
    try {
      const result = await captureRef(cameraRef, {
        result: "tmpfile",
        height: pixels,
        width: pixels,
        quality: 1,
        format: "png",
      });

      console.log("Captured image result:", result);
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <CameraView
        style={styles.camera}
        facing={facing}
        zoom={0}
        ref={cameraRef}
      ></CameraView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={captureImage}>
          <AntDesign name="camera" size={48} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    position: "relative",
    // justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, .45)",
    borderBlockColor: "1px solid rgba(255, 255, 255, .25)",
    borderRadius: 50,
    zIndex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingVertical: 8,
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    // flex: 2,
    width: "100%",
    height: height * 0.7,
  },
  buttonContainer: {
    // flex: 1,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  button: {
    flex: 1,
    // alignSelf: "flex-end",
    borderRadius: 50,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 50, // Adjust as needed
    height: 50,
    resizeMode: "contain",
  },
});
