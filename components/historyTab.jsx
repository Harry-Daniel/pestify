import { Pressable, StyleSheet, Text, View } from "react-native";

const HistoryTab = () => {
    const pressHandler=()=>console.log("tab opens");
  return (
    <View style={styles.tabOuterContainer}>
        <Pressable style={({pressed})=>[styles.tabInnerContainer,pressed&&styles.tabPressed]}
        android_ripple={{ color: "#42bcf5" }}
        onPress={pressHandler} >
          <Text style={styles.pestName}>Army Ant</Text>
          <Text style={styles.timeElapsed}>10 mins ago</Text>
        </Pressable>
    </View>
  );
};

export default HistoryTab;

const styles = StyleSheet.create({
    tabOuterContainer:{
        overflow:"hidden",
        borderRadius: 40,
    },
  tabInnerContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
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
  tabPressed:{
    backgroundColor:"#00a4f0",
    elevation:2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
});
