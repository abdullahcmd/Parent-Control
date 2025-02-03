import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NormalButton from "./src/components/Buttons/NOrmalButton";
import Choice from "./src/components/choice";
import CHoiceScreen from "./src/utils/Screens/ChoiceScreen";
import NewBack from "./src/components/background.js/secondBack";
import SignInComp from "./src/components/LoginComponent/SignIn";
import LoginScreen from "./src/utils/Screens/LoginScreen";
import SignUpScreen from "./src/utils/Screens/SignUpScreen";
import ForgetPass1 from "./src/utils/Screens/ForgetPassScreen1";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <NewBack>
          <ForgetPass1 />
        </NewBack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
