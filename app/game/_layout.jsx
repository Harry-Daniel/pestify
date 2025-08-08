import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: "PESTIFY",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Game",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={size} color={color} />
          ),
        }}
      />
    </Stack>
  );
};

export default _layout;
