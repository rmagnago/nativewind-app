import { ScrollView, Text, View } from "react-native";
import { Link } from 'expo-router'
import Constants from "expo-constants"

const statusBarHeight = Constants.statusBarHeight;

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="flex justify-center items-center h-12 w-48 rounded-full mx-5 bg-sky-600 " style={{ marginTop: statusBarHeight + 8 }}>
        <Link className="text-white" href={"/dashbord"}>Ir para Regulamentos</Link>
      </View>

    </ScrollView>
  );
}
