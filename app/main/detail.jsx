import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { useRoute } from "@react-navigation/native";
import List from "../../components/PestDetail/list";
import Subtitle from "../../components/PestDetail/subtitle";
import pests from "../../pest_info.json";

const Detail = () => {
  const route = useRoute();
  const { pest_name } = route.params;
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
      <Image source={pestImages[pest_name]} style={styles.image} />
      <Text style={styles.title}>{pest_name.toUpperCase()}</Text>

      <View style={styles.listContainer}>
        <Subtitle>Effects of Pest</Subtitle>
        <List data={pests[pest_name].effects} />
        <Subtitle>Recommendations</Subtitle>
        <List data={pests[pest_name].recommendations} />
      </View>
    </ScrollView>
  );
};

export default Detail;

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
    margin: 8,
    textAlign: "center",
    color: "#0364ad",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    margin: "auto",
  },
});
