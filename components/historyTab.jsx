import { Fontisto } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const HistoryTab = ({ navigation, pestName }) => {
  const pressHandler = () => {
    navigation.navigate("detail", {
      pest_name: pestName,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabOuterContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.tabInnerContainer,
            pressed && styles.tabPressed,
          ]}
          android_ripple={{ color: "#42bcf5" }}
          onPress={pressHandler}
        >
          <Text style={styles.pestName}>{pestName.toUpperCase()}</Text>
          <Fontisto name="eye" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default HistoryTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tabOuterContainer: {
    width:"100%",
    marginVertical: 16,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 40,
  },
  tabInnerContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0077cc",
    padding: 10,
    borderRadius: 40,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.35,
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
  tabPressed: {
    backgroundColor: "#00a4f0",
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
});
