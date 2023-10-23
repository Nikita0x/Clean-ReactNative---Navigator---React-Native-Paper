import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomModal from '../components/CustomModal';
import CustomRadioButton from '../components/CustomRadioButton';

export default function HomeScreen() {
  return (
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
