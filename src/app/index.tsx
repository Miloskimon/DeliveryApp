import { ScrollView, Text, View } from "react-native";
import { Heard } from "../components/header";
import { Banner} from "../components/banner";
import {Search} from "../components/search";

import Constants from "expo-constants"

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (

      <ScrollView style={{flex:1}} className="bg-slate-200" showsVerticalScrollIndicator={false}>
        <View className="w-ful px-4" style={{marginTop:statusBarHeight + 8}} >
          <Heard/>
          <Banner/>
          <Search/>
        </View>
      </ScrollView>
  );
}
