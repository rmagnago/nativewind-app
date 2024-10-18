import { View } from 'react-native';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Drawer screenOptions={{
            drawerInactiveTintColor: "#FFFFFF",
            headerStyle: { backgroundColor: "#005490" },
            drawerStyle: { backgroundColor: "#005490" },

        }} />
    );
}