import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import DryerScreen from '../screens/DryerScreen';



const Footer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home-outline', unfocusedIcon: 'home'},
    { key: 'dryer', title: 'Dryer', focusedIcon: 'candle' },
    { key: 'about', title: 'About', focusedIcon: 'help-circle-outline', unfocusedIcon: 'help-circle' },
    { key: 'settings', title: 'Settings', focusedIcon: 'tune', unfocusedIcon: 'tune' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    dryer: DryerScreen,
    about: AboutScreen,
    settings: SettingsScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Footer;