import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={size} color={color} />
          ),
        }}
      />
    </Stack>
  );
};

export default _layout;
