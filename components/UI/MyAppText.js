import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Text } from 'react-native';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const MyAppText = (props) => {
  const [fontsLoaded] = useFonts({
    arabic: require("../../assets/fonts/arabicMedium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text style={{ fontFamily: "arabic", textAlign:"center" }} onLayout={onLayoutRootView}>
      {props.children}
    </Text>
  );
};

export default MyAppText;
