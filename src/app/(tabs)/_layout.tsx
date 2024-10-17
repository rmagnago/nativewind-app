import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}

        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="edit"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="bell" size={size} color={color} />
                    ),
                }}
            />

        </Tabs>
    )
}