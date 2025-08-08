import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const index = () => {
  const pestImages = {
    diamondback_moth: require("../../assets/pest_images/diamondback_moth.jpg"),
    fruit_flies: require("../../assets/pest_images/fruit_flies.jpg"),
    aphid: require("../../assets/pest_images/aphids.jpg"),
    armyworm: require("../../assets/pest_images/armyworm.jpg"),
    grasshopper: require("../../assets/pest_images/grasshopper.jpg"),
    redspider: require("../../assets/pest_images/redspider.jpg"),
    stem_borer: require("../../assets/pest_images/stem_borer.jpg"),
    whitefly: require("../../assets/pest_images/whitefly.jpg"),
  };
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={pestImages["whitefly"]} style={styles.image} />
      <Text style={styles.title}>Guess the Pest?</Text>
      <View style={styles.inputboxCtn}>
        <TextInput style={styles.inputbox} placeholder="Type here..." />
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
    backgroundColor: "#00a4f0",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 16,
    margin: 8,
    textAlign: "center",
    color: "#0364ad",
  },
  inputboxCtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputbox: {
    minWidth: 100,
    
    borderBottomColor: "#0364ad",
    borderBottomWidth: 2,
  },
});
