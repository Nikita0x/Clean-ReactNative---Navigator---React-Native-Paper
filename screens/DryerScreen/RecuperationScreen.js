import { StyleSheet, Text, View } from 'react-native';

export default function RecuperationScreen() {
  return (
    <View style={styles.container}>
      <Text>RecuperationScreen</Text>
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
