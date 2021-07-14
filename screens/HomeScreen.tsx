import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import VideoListItem from "../components/VideoListItem";
import vidoes from "../assets/data/videos.json";

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={vidoes}
        renderItem={({ item }) => <VideoListItem video={item} />}
      />
    </View>
  );
};

export default HomeScreen;
