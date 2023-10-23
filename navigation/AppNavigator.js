import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DryerScreen from '../screens/DryerScreen';
import AspirationScreen from '../screens/DryerScreen/AspirationScreen';
import LoadScreen from '../screens/DryerScreen/LoadScreen';
import UnloadScreen from '../screens/DryerScreen/UnloadScreen';
import RecuperationScreen from '../screens/DryerScreen/RecuperationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Dryer" component={DryerScreen} />

      <Stack.Screen name="Aspiration" component={AspirationScreen} />
      <Stack.Screen name="Recuperation" component={RecuperationScreen} />
      <Stack.Screen name="Unload" component={UnloadScreen} />
      <Stack.Screen name="Load" component={LoadScreen} />

      
    </Stack.Navigator>
  );
};

export default AppNavigator;
