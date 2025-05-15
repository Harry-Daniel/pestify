import { ScrollView, StyleSheet, Text, View } from "react-native";

import List from "../../components/PestDetail/list";
import Subtitle from "../../components/PestDetail/subtitle";

const Detail = () => {


  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.image}> </View>
      <Text style={styles.title}>Pest Name</Text>

      <View style={styles.listContainer}>
        <Subtitle>Effects of Pest</Subtitle>
        <List data={["Can cause disease to plant","Hello World"]} />
        <Subtitle>Recommendations</Subtitle>
        <List data={["Kill them now"]} />
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
    color:"#0364ad",
    
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    margin: "auto",
  },
});
