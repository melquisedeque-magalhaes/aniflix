

import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { NativeBaseProvider, Text } from "native-base";
import { Home } from './src/screens/Home';
import { THEME } from './src/theme';

export default function App() {

  const [isFontLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor='transparent' style='light' translucent />
       {isFontLoaded ? <Home /> : <Text>Loading</Text>} 
    </NativeBaseProvider>
  );
}

