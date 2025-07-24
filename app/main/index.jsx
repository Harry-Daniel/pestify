import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PhotoPreviewSection from "../../components/photoPreviewSection";

const Home = () => {
  const [photo, setPhoto] = useState(null);
  const navigation = useNavigation();
  const capturePressHandler = () => {
    navigation.navigate("camera");
  };
  const uploadPressHandler = async () => {
    try {
      let result = {};
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (result) {
        setPhoto(result);
      }
    } catch {
      console.log(error);
    }
  };

  if (photo)
    return (
      <PhotoPreviewSection
        photo={photo}
        handleRetakePhoto={handleRetakePhoto}
        handleUpload={uploadHandler}
      />
    );

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.randomQuote}>
          Pests nibble, yields crumble. But with us, your harvest stays humble
        </Text>
        <Text style={styles.detectText}>Let's detect some pests</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonOuterContainer}>
          <Pressable
            android_ripple={{ color: "#42bcf5" }}
            style={({ pressed }) => [
              styles.buttonInnerContainer,
              pressed && styles.buttonPressed,
            ]}
            onPress={capturePressHandler}
          >
            {({ pressed }) => (
              <Text
                style={[styles.buttonText, pressed && styles.buttonTextPressed]}
              >
                Capture
              </Text>
            )}
          </Pressable>
        </View>
        <View style={styles.buttonOuterContainer}>
          <Pressable
            android_ripple={{ color: "#42bcf5" }}
            style={({ pressed }) => [
              styles.buttonInnerContainer,
              pressed && styles.buttonPressed,
            ]}
            onPress={uploadPressHandler}
          >
            {({ pressed }) => (
              <Text
                style={[styles.buttonText, pressed && styles.buttonTextPressed]}
              >
                Upload
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "7%",
  },
  innerContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  randomQuote: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  detectText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonOuterContainer: {
    borderRadius: 8,
    overflow: "hidden",
    margin: 20,
    marginVertical: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#00a4f0", // Default = blue
    elevation: 4,
    shadowColor: "#00a4f0",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.35,
  },
  buttonText: {
    textAlign: "center",
    color: "white", // White text (better contrast on blue)
  },
  buttonTextPressed: {
    opacity: 0.8, // Slightly fade text on press (optional)
  },
  buttonPressed: {
    backgroundColor: "#0077cc", // Darker blue when pressed
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
});
