import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DryerButton from '../components/DryerButton';
import SettingsButton from '../components/SettingsButton';
import { useNavigation } from '@react-navigation/native';
import CustomModal from '../components/CustomModal';
import CustomRadioButton from '../components/CustomRadioButton';

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
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <CustomModal 
        title="Show recipes"
        text="Here is a list of all the recipes:"
      />
      <CustomRadioButton />
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
