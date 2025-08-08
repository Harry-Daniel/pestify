import { Feather, Fontisto } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PhotoPreviewSection = ({
  photo,
  result,
  handleRetakePhoto,
  handleUpload,
  setPestName,
}) => {
  const [pest, setPest] = useState("No pest made");
  const [pestFound, setPestFound] = useState(false);

  useEffect(() => {
    const sendToServer = async () => {
      if (!photo?.uri) return;

      const uri = photo.uri;
      const filename = uri.split("/").pop();
      const match = /\.(\w+)$/.exec(filename ?? "");
      const type = match ? `image/${match[1]}` : `image`;

      const formData = new FormData();
      formData.append("image", {
        uri,
        name: filename,
        type,
      });

      try {
        setPest("Loading...");
        // const response = await fetch("http://100.112.25.208:8000/api/predict/", { this is for using devices
        const response = await fetch("http://10.0.2.2:8000/api/predict/", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        });

        const json = await response.json();
        console.log("Prediction result:", json);
        setPest(json.label + " detected");
        setPestName(json.label);
        setPestFound(true);
        // TODO: optionally lift result to parent with a callback if needed
      } catch (error) {
        setPest("No Pest detected");

        console.error("Upload failed:", error);
      }
    };

    sendToServer();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.previewContainer}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
      </View>

      {/* 🔍 Prediction display (optional) */}
      <View style={{ marginTop: 20 }}>
        {result && result.length > 0 ? (
          result.map((item, index) => (
            <Text key={index} style={{ color: "white", fontSize: 16 }}>
              {item.label || "Class"}: {(item.confidence * 100).toFixed(2)}%
            </Text>
          ))
        ) : (
          <Text style={{ color: "gray" }}>{pest.toUpperCase()} </Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
          <Fontisto name="trash" size={36} color="black" />
        </TouchableOpacity>

        {pestFound && (
          <TouchableOpacity style={styles.button} onPress={handleUpload}>
            <Feather name="upload" size={36} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PhotoPreviewSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderRadius: 15,
    padding: 1,
    width: "95%",
    backgroundColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  previewContainer: {
    width: "95%",
    height: "85%",
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: "4%",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 50,
  },
  button: {
    backgroundColor: "gray",
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
