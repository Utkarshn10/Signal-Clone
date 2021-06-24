import React from "react";
import {ScrollViewComponent} from "react-native";
import {StyleSheet, Text, View, SafeAreaView} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import CustomListItem from "../components/CustomListItem";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
