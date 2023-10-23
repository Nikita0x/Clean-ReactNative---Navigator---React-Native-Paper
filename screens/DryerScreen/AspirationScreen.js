import { StyleSheet, Text, View } from 'react-native';

export default function AspirationScreen() {
  return (
    <View style={styles.container}>
      <Text>AspirationScreen</Text>
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
