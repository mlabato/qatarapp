import { StyleSheet, Text, View, Image } from "react-native";
import MyAppText from "../UI/MyAppText";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <MyAppText><Text style={styles.title}> qatarapp</Text></MyAppText>
      
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 40,
    alignItems: "center"
  },
  logo: {
    height: 100,
    width: 80,
  },
  title: {
    color: "#8A1538",
    fontSize: 32,
    
  }
});

export default Header;
