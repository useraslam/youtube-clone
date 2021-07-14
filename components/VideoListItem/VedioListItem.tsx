import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

type VideoListItemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;

    user: {
      name: string;
      image?: string;
      // subscribers: number;
    };
    views: number;
  };
};

const VideoListItem = (props: VideoListItemProps) => {
  const navigation = useNavigation();
  const { video } = props;
  const minute = Math.floor(video.duration / 60);
  let seconds = video.duration % 60;

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + "m";
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + "k";
  }
  const openVideoPage = () => {
    navigation.navigate("VideoScreen", { id: video.id });
  };

  return (
    <Pressable onPress={openVideoPage} style={styles.videoCard}>
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {minute}:{seconds < 10 ? "0" : ""}
            {seconds}
          </Text>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />
        <View style={styles.middleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subTitle}>
            {video.user.name}
            {"  "}
            {viewsString}
            {"  "}
            {video.createdAt}
          </Text>
        </View>
        <Feather name="more-vertical" size={16} color="grey" />
      </View>
    </Pressable>
  );
};

export default VideoListItem;
