import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack } from "expo-router";
const _layout = () => {
  return (
    <Stack
      screenOptions={{
      headerTitle:"PESTIFY",

    }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="analyse"
        options={{
          title: "Analyse",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
    </Stack>
  );
};

export default _layout;
