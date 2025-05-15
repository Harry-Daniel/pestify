import { FlatList, StyleSheet, View } from "react-native";
import HistoryTab from "../../components/historyTab";

const History = () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    
  ];
  return (
    <View >
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={HistoryTab}
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
