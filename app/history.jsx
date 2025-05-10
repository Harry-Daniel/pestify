import { StyleSheet, Text, View } from "react-native";
import HistoryTab from "../components/historyTab";

const History = () => {
  return (
    <View style={styles.container}>
      <HistoryTab/>
      
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
});
