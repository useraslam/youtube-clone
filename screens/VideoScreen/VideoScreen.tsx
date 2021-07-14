import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import styles from "./styles";
import video from "../../assets/data/video.json";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import videos from "../../assets/data/videos.json";
import VideoListItem from "../../components/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer";
import VideoComment from "../../components/VideoComment";
import VideoComments from "../../components/VideoComments";
import comments from "../../assets/data/comments.json";
// import {
//   // useFonts,
//   Roboto_500Medium,
// } from "@expo-google-fonts/roboto";

const VideoScreen = () => {
  // let setSubscribers = video.subscribers.toString();
  const commentSheetRef = useRef<BottomSheetModal>(null);

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + "m";
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + "k";
  }

  const openComments = () => {
    commentSheetRef.current?.present();
  };

  return (
    <View style={{ backgroundColor: "#282828" }}>
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

      <View style={{ flex: 1 }}>
        <View style={styles.videoInfoContainer}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subTitle}>
            {video.user.name}
            {"  "}
            {viewsString}
            {"  "}
            {video.createdAt}
          </Text>
        </View>

        <View style={styles.actionListContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.actionListItem}>
              <AntDesign name="like2" size={20} color="white" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>
            <View style={styles.actionListItem}>
              <AntDesign name="dislike2" size={20} color="white" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>
            <View style={styles.actionListItem}>
              <MaterialCommunityIcons
                name="share-outline"
                size={20}
                color="white"
              />
              <Text style={styles.actionText}>Share</Text>
            </View>
            <View style={styles.actionListItem}>
              <Feather name="download" size={20} color="white" />
              <Text style={styles.actionText}>Download</Text>
            </View>
            <View style={styles.actionListItem}>
              <MaterialCommunityIcons
                name="plus-box-multiple-outline"
                size={20}
                color="white"
              />
              <Text style={styles.actionText}>Save</Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderColor: "#616161",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            padding: 10,
          }}
        >
          <Image style={styles.avatar} source={{ uri: video.user.image }} />
          <View>
            <Text style={{ color: "white" }}>{video.user.name}</Text>
            <Text style={{ color: "lightgrey", fontSize: 12 }}>
              {video.user.subscribers} Subscribers
            </Text>
          </View>
          <Text
            style={{
              color: "red",
              fontSize: 16,
              textTransform: "uppercase",
              fontWeight: "600",
              flex: 1,
              textAlign: "right",
            }}
          >
            Subscirbe
          </Text>
        </View>

        {/* all comment */}
        <Pressable
          onPress={openComments}
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            paddingVertical: 10,
          }}
        >
          <View style={{ padding: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "white",
              }}
            >
              Comments{"  "}
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "grey",
                }}
              >
                34
              </Text>
            </Text>
          </View>
          <VideoComment comment={comments[0]} />
        </Pressable>

        <BottomSheetModal
          ref={commentSheetRef}
          snapPoints={["70%"]}
          index={0}
          backgroundComponent={({ style }) => (
            <View style={[style, { backgroundColor: "#575757" }]} />
          )}
        >
          <VideoComments />
        </BottomSheetModal>
      </View>
    </View>
  );
};

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <BottomSheetModalProvider>
        <FlatList
          data={videos}
          renderItem={({ item }) => <VideoListItem video={item} />}
          ListHeaderComponent={VideoScreen}
        />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendation;
