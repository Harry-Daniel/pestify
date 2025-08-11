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
import pests from "../../pest_info.json";

export default function Index() {
  const [gameStage, setGameStage] = useState("start"); // "start" | "game" | "over"
  const [score, setScore] = useState(0);

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

  const normalizeName = (name) =>
    name.toLowerCase().replace(/[-_]/g, " ").replace(/\s+/g, " ").trim();

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

  const formatDisplayName = (name) =>
    normalizeName(name)
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const startGame = () => {
    setScore(0);
    setRemainingPests([...allPests]);
    setCurrentPest(getRandomPest(allPests));
    setGuess("");
    setGameStage("game");
  };

  const handleSubmit = () => {
    let correct = isMatch(guess, currentPest);
    if (correct) {
      setScore((prev) => prev + 1);
      alert(`✅ Correct!\n ${pests[currentPest].about}`);
    } else {
      alert(
        `❌ Wrong! It was ${formatDisplayName(currentPest)}.\n ${
          pests[currentPest].about
        }`
      );
    }

    const newRemaining = remainingPests.filter((p) => p !== currentPest);
    if (newRemaining.length === 0) {
      setGameStage("over");
    } else {
      setRemainingPests(newRemaining);
      setCurrentPest(getRandomPest(newRemaining));
    }
    setGuess("");
  };

  const quitGame = () => {
    setGameStage("over");
  };

  // ---------- SCREENS ----------
  if (gameStage === "start") {
    return (
      <View style={styles.centerScreen}>
        <Text style={styles.bigText}>Ready to Play?</Text>
        <TouchableOpacity style={styles.startButton} onPress={startGame}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (gameStage === "over") {
    return (
      <View style={styles.centerScreen}>
        <Text style={styles.bigText}>🎉 Game Over!</Text>
        <Text style={styles.scoreText}>Your Score: {score}</Text>
        <TouchableOpacity
          style={[styles.startButton, { backgroundColor: "#0364ad" }]}
          onPress={() => setGameStage("start")}
        >
          <Text style={styles.buttonText}>Return to Start</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ---------- GAME SCREEN ----------
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.scoreContainer}>
        <TouchableOpacity style={styles.quitButton} onPress={quitGame}>
          <Text style={styles.buttonText}>Quit</Text>
        </TouchableOpacity>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>

      <Image source={pestImages[currentPest]} style={styles.image} />
      <Text style={styles.title}>Guess the Pest?</Text>

      <View style={styles.inputboxCtn}>
        <TextInput
          style={styles.inputbox}
          placeholder="Type here..."
          value={guess}
          onChangeText={setGuess}
        />
      </View>

      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  centerScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0364ad",
  },
  bigText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: "#0364ad",
    borderColor: "white",
    borderWidth: 1,
    marginTop: 10,

    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
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
