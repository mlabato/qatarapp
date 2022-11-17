import { StyleSheet, View, Text, Pressable } from "react-native";
import MyAppText from "../UI/MyAppText";

const Navbar = () => {
  const buttonTitles = ["results", "standings", "matches"];

  const buttonMap = buttonTitles.map((button) => {
    return (
      <Pressable style={styles.buttonContainer} android_ripple={{ color: "#dddddd" }}>
        <MyAppText>
          <Text style={styles.buttonText}>{button}</Text>
        </MyAppText>
      </Pressable>
    );
  });
  return <View style={styles.navbarContainer}>{buttonMap}</View>;
};

const styles = StyleSheet.create({
  navbarContainer: {
    flex: 2,
    flexDirection: "row",
    padding: 40,
    alignItems: "center",
  },
  buttonContainer: {
    marginHorizontal: 10,
    width: 100,
    height: 30,
    borderRadius: 24,
    backgroundColor: "#8A1538",
    padding: 4,
    
    
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14, 
  }
});

export default Navbar;
