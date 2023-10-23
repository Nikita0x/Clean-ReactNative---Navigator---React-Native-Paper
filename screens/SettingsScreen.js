import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomLoader from '../components/CustomLoader';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <CustomLoader size="small" color="blue"/>
      <CustomLoader size="large" color="magenta"/>
      <CustomLoader size={100} color="green"/>
    </View>
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
