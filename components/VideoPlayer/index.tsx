import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";

interface VideoPlayerProps {
  videoURI: string;
  thumbnailURI: string;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { videoURI, thumbnailURI } = props;
  //   const videoRuf = useRef<Video>(null);
  //   const onRefAssign = (videoElement: Video) => {
  //       console.warn("video is mounted") {
  //           const playbackObject = videoElement;
  //         const source = {uri: videoURI};
  //         const initialStatus =
  //           playbackObject.loadAsync();
  //       }
  //   }

  return (
    <View>
      <Video
        style={{ width: "100%", flex: 1, aspectRatio: 16 / 9 }}
        posterSource={{ uri: thumbnailURI }}
        source={{ uri: videoURI }}
        posterStyle={{ resizeMode: "cover" }}
        usePoster={false}
        resizeMode="contain"
        useNativeControls
      />
    </View>
  );
};

export default VideoPlayer;
