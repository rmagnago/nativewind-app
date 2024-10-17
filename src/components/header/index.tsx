import 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function Header() {
    return (
        <View className="flex flex-row items-center justify-between bg-sky-700 h-20 px-8">
            <Pressable className="flex flex-row justify-center items-center gap-2">
                <Feather name="menu" color={"#FFFFFF"} size={20} />
                <Text className="text-white text-xl">MENU</Text>
            </Pressable>
        </View>

    );
}