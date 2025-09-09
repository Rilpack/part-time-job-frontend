/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import { AppNavigation } from '@/app/navigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigation isDark={isDarkMode} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
