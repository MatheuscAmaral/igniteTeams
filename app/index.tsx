import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';

import theme from '../src/theme';

import Loading from '@/src/components/loading';

import Groups from '@screens/Groups';

const App = () => {
  const fontsLoaded = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {
        fontsLoaded ? <Groups/> : <Loading/>
      }
    </ThemeProvider>
 )
}

export default App;