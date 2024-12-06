import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import * as FileSystem from "expo-file-system";
import { decodeJpeg } from "@tensorflow/tfjs-react-native";

const TfModel = async (picture: string) => {
  try {
    console.log("Image path:", picture); // Log the full image path

    // Use file:// prefix for local files on mobile

    await tf.ready();
    const model = await mobilenet.load();

    const fileUri = picture;
    const imgB64 = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    console.log("imgB64", imgB64);
    const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
    // console.log("imgBuffer", imgBuffer);

    // const response = await fetch(filePath, {}, { isBinary: true });
    // const imageDataArrayBuffer = await response.arrayBuffer();
    const imageData = new Uint8Array(imgBuffer);
    const imageTensor = decodeJpeg(imageData);
    const prediction = await model.classify(imageTensor);
    const topPrediction = Math.max(...prediction.map((p) => p.probability));
    const topPredictionIndex = prediction.findIndex(
      (p) => p.probability === topPrediction
    );
    console.log("QQQQQQQ", prediction);

    if (prediction && prediction.length > 0) {
      // return `${prediction[0].className} (${prediction[0].probability.toFixed(
      //   3
      // )})`;
      return prediction[topPredictionIndex].className;
    }

    return "No prediction";
  } catch (error) {
    console.error(error);
    return "Error in prediction";
  }
};

export default TfModel;
