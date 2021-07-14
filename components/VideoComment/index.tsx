import React from "react";
import { View, Text, Image } from "react-native";

interface VideoCommentProps {
  comment: {
    id: string;
    createdAt: string;
    comment: string;
    likes: number;
    dislikes: number;
    user: {
      name: string;
      image: string;
    };
  };
}

const VideoComment = ({ comment }: VideoCommentProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <Image
        style={{ width: 30, height: 30, borderRadius: 50 }}
        source={{ uri: comment.user.image }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 12,
          flexShrink: 1,
          paddingLeft: 10,
        }}
      >
        {comment.comment}
      </Text>
    </View>
  );
};

export default VideoComment;
