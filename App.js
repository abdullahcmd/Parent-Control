import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NewBack from "./src/components/background.js/secondBack";
import ForgetPass2 from "./src/utils/Screens/ForgetPassScreen2";
import ForgetPass3 from "./src/utils/Screens/forgetPass3";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <NewBack>
          <ForgetPass3 />
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
