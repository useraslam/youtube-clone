import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  safeAreaView: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#282828",
  },
  videoPlayer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  timeContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#00000099",
    height: 20,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2.5,
  },

  videoInfoContainer: {
    margin: 10,
  },
  tags: {
    color: "#009dff",
    fontSize: 14,
    fontWeight: "500",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 2.5,
  },
  subTitle: {
    color: "grey",
    fontSize: 12,
  },
  actionListContainer: {
    flexDirection: "row",
  },
  actionListItem: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    height: 60,
    width: 80,
  },
  actionText: {
    color: "white",
    fontSize: 12,
    padding: 2.5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
});

export default styles;
