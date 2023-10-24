import { StatusBar } from 'expo-status-bar';
import DryerButton from '../components/DryerButton';
import SettingsButton from '../components/SettingsButton';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Button, Icon } from 'react-native-paper';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <DryerButton
          title='Dryer'
          onPress={() => navigation.navigate('Dryer')}
          loaded='30%'
        />
        <SettingsButton
          title='Settings'
          lang='Eng'
          theme='Dark'
          onPress={() => navigation.navigate('Settings')}
        />
      </View>

      <Pressable onPress={() => navigation.navigate('Account')}>
        <View style={styles.RowLayout}>


        <View style={styles.avatar}>
            <Image
              source={require('../assets/user.png')}
              style={{ width: 50, height: 50 }}
            />
          </View>

          <View style={styles.name}>
            <Text>Admin</Text>
          </View>


          <View style={styles.accessLevel}>
            <Text>Access level: Mid</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: 10,
  },
  outerContainer: {
    display: 'flex',
  },
  RowLayout: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  avatar: {
    flex: 1,
  },
  name: {
    flex: 2
  },
  accessLevel: {
    flex: 2,
  }
});