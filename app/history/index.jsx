import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import HistoryTab from "../../components/historyTab";
import { useFocusEffect } from "@react-navigation/native";

const STORAGE_KEY = "pestsIdentified";

const History = () => {
  const [identifiedPestsList, setIdentifiedPestsList] = useState([]);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const loadNames = async () => {
        try {
          const storedNames = await AsyncStorage.getItem(STORAGE_KEY);
          if (storedNames) {
            setIdentifiedPestsList(JSON.parse(storedNames));
          } else {
            setIdentifiedPestsList([]); // Optional: clear list if nothing is stored
          }
        } catch (e) {
          console.error("Failed to load names.", e);
        }
      };

      loadNames();
    }, [])
  );
  return (
    <View>
      <FlatList
        data={identifiedPestsList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <HistoryTab navigation={navigation} pestName={item} />
        )}
        style={styles.container}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    marginVertical: "20%",
  },
});
