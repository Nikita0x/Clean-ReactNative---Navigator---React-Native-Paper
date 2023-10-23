import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import Footer from './navigation/Footer';


export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <AppNavigator /> */}
        <Footer />
      </NavigationContainer>
    </PaperProvider>
  );
}
