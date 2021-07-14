import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  videoCard: {
    paddingVertical: 15,
    marginTop: -15,
  },
  thumbnail: {
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
  time: {
    color: "white",
    fontWeight: "bold",
  },
  titleRow: {
    flexDirection: "row",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  middleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  subTitle: {
    color: "grey",
    fontSize: 12,
  },
});

export default styles;
