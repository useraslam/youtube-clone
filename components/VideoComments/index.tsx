import React from "react";
import { View, Text } from "react-native";
import VideoComment from "../VideoComment";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import comments from "../../assets/data/comments.json";

const VideoCommnets = () => {
  return (
    <View style={{ backgroundColor: "#282828", flex: 1 }}>
      <BottomSheetFlatList
        data={comments}
        renderItem={({ item }) => <VideoComment comment={item} />}
      />
    </View>
  );
};
export default VideoCommnets;
