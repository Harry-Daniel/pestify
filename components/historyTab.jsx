import { StyleSheet, Text, View } from "react-native";

const HistoryTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pestName}>Army Ant</Text>
      <Text style={styles.timeElapsed}>10 mins ago</Text>
    </View>
  );
};

export default HistoryTab;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    backgroundColor: "#0077cc",
    padding: 10,
    borderRadius: 40,
  },
  pestName: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: "white",
  },
  timeElapsed: {
    fontSize: 12,
    paddingHorizontal: 20,
    color: "white",
  },
});
