import { FlatList, StyleSheet, View } from "react-native";
import HistoryTab from "../../components/historyTab";
import { useNavigation } from "expo-router";


const History = () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    
  ];
  const navigation = useNavigation();
  return (
    <View >
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=><HistoryTab navigation={navigation} />}
        style={styles.container}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container:{
    marginVertical:"20%",

  }
});
