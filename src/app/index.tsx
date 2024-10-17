import { ScrollView, Text, View } from "react-native";

import Constants from "expo-constants"
import { Header } from "@/src/components/header";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
      </View>

    </ScrollView>
  );
}
