import { AntDesign } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "expo-router";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PhotoPreviewSection from "../../components/photoPreviewSection";

export default function Camera() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const [pestName, setPestName] = useState(null);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  const uploadHandler = () => {
    navigation.navigate("detail", {
      pest_name: pestName,
    });
  };

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

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exit: false,
      };
      const takenPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takenPhoto);
    }
  };

  const handleRetakePhoto = () => setPhoto(null);

  if (photo)
    return (
      <PhotoPreviewSection
        photo={photo}
        handleRetakePhoto={handleRetakePhoto}
        handleUpload={uploadHandler}
        setPestName={setPestName}
        
      />
    );

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
      ></CameraView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <AntDesign name="retweet" size={44} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
          <AntDesign name="camera" size={44} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
    position: "absolute",
    bottom: 0,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
