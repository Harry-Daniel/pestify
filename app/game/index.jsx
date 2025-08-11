import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const index = () => {
  const pestImages = {
    diamondback_moth: require("../../assets/pest_images/diamondback_moth.jpg"),
    aphid: require("../../assets/pest_images/aphids.jpg"),
    armyworm: require("../../assets/pest_images/armyworm.jpg"),
    grasshopper: require("../../assets/pest_images/grasshopper.jpg"),
    whitefly: require("../../assets/pest_images/whitefly.jpg"),
  };

  const allPests = Object.keys(pestImages);

  const getRandomPest = (remaining) =>
    remaining[Math.floor(Math.random() * remaining.length)];

  const [remainingPests, setRemainingPests] = useState([...allPests]);
  const [currentPest, setCurrentPest] = useState(getRandomPest(allPests));
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);

  const normalizeName = (name) => {
    return name.toLowerCase().replace(/[-_]/g, " ").replace(/\s+/g, " ").trim();
  };

  const isMatch = (input, correct) => {
    const normInput = normalizeName(input);
    const normCorrect = normalizeName(correct);

    if (normInput === normCorrect) return true;

    if (
      normInput === normCorrect + "s" ||
      normInput === normCorrect + "es" ||
      normCorrect === normInput + "s" ||
      normCorrect === normInput + "es"
    ) {
      return true;
    }

    return false;
  };

  const formatDisplayName = (name) => {
    return normalizeName(name)
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleSubmit = () => {
    if (isMatch(guess, currentPest)) {
      setScore((prev) => prev + 1);
      alert("✅ Correct!");
    } else {
      alert(`❌ Wrong! It was ${formatDisplayName(currentPest)}`);
    }

    // Remove the current pest from remaining list
    const newRemaining = remainingPests.filter((p) => p !== currentPest);

    if (newRemaining.length === 0) {
      alert(
        `🎉 Game Over! Final Score: ${
          score + (isMatch(guess, currentPest) ? 1 : 0)
        }`
      );
      // Reset game
      setRemainingPests([...allPests]);
      setCurrentPest(getRandomPest(allPests));
      setScore(0);
    } else {
      setRemainingPests(newRemaining);
      setCurrentPest(getRandomPest(newRemaining));
    }

    setGuess("");
  };

  const handleQuit = () => {
    setScore(0);
    setGuess("");
    setRemainingPests([...allPests]);
    setCurrentPest(getRandomPest(allPests));
    alert("Game ended!");
  };

  return (
    <ScrollView style={styles.rootContainer}>
      {/* Score + Quit Section */}
      <View style={styles.scoreContainer}>
        <TouchableOpacity style={styles.quitButton} onPress={handleQuit}>
          <Text style={styles.buttonText}>Quit</Text>
        </TouchableOpacity>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>

      {/* Pest Image */}
      <Image source={pestImages[currentPest]} style={styles.image} />
      <Text style={styles.title}>Guess the Pest?</Text>

      {/* Input */}
      <View style={styles.inputboxCtn}>
        <TextInput
          style={styles.inputbox}
          placeholder="Type here..."
          value={guess}
          onChangeText={setGuess}
        />
      </View>

      {/* Submit Button */}
      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  scoreContainer: {
    backgroundColor: "#0364ad",
    padding: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scoreText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
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
    marginTop: 10,
  },
  inputbox: {
    minWidth: 150,
    borderBottomColor: "#0364ad",
    borderBottomWidth: 2,
    fontSize: 16,
    padding: 4,
  },
  submitContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: "#0364ad",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  quitButton: {
    backgroundColor: "#d9534f",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
