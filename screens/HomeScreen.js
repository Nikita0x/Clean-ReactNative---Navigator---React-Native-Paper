import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DryerButton from '../components/DryerButton';
import SettingsButton from '../components/SettingsButton';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation()

  return (
      <View style={styles.container}>
        <DryerButton 
          title="Dryer" 
          onPress={() => navigation.navigate("Dryer")}
          loaded="30%"
        />
        <SettingsButton 
          title="Settings"
          lang="Eng"
          theme="Dark" 
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: 10,
  },
});
