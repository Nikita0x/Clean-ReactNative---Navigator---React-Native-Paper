import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

// WebSocket
const ws = new WebSocket('ws://192.168.178.134:3432');
ws.onopen = () => {
  console.log('Connection...');
  console.log('ws: ', ws);

  const message = {
    type: 'debug',
    msg: 'react native message',
  };
  ws.send(JSON.stringify(message));
};

export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
