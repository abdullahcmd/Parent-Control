import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashComponent from './src/components/splashComponent';
import Logo from './src/components/Logo/logo';
export default function App() {
  return (
    <SplashComponent > 
      <Logo/>
      </SplashComponent>
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
