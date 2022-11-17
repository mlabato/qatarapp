import { View, StyleSheet, Text } from "react-native";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Navbar />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "arabic",
  },
});
