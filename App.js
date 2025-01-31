
import { StyleSheet} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NormalButton from './src/components/Buttons/NOrmalButton';
import Choice from './src/components/choice';
import CHoiceScreen from './src/utils/Screens/ChoiceScreen';
export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView>
      <CHoiceScreen></CHoiceScreen>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
