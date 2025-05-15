import { Pressable, StyleSheet, Text, View } from "react-native";

const Analyse = () => {
  const pressHandler = () => console.log("detail Screen opens");
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.randomQuote}>Pests detected</Text>
        <Text style={styles.randomQuote}>Ready to Analyse</Text>
      </View>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          android_ripple={{ color: "#42bcf5" }}
          style={({ pressed }) => [
            styles.buttonInnerContainer,
            pressed && styles.buttonPressed,
          ]}
          onPress={pressHandler}
        >
          {({ pressed }) => (
            <Text
              style={[styles.buttonText, pressed && styles.buttonTextPressed]}
            >
              Analyse
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Analyse;

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
  buttonOuterContainer: {
    borderRadius: 8,
    overflow: "hidden",
    margin: 20,
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
