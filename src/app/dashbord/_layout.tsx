import { Tabs } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{ headerShown: false }} />
        </Tabs>
    );
}