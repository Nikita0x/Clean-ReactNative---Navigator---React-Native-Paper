import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Button, Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function DryerScreen() {
  const navigation = useNavigation()


  return (
    <View style={styles.container}>

      <Pressable onPress={() => navigation.navigate("Aspiration")}>
        <View style={styles.RowLayout}>
          <View style={styles.flex1}>
          <Text>Aspiration</Text>
          </View>
          
          <View style={styles.flex2}>
            <Icon source="circle" color="green" />
          </View>

          <View style={styles.flex3}>
            <Image 
              source={require('../assets/cat.jpg')}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Recuperation")}>
        <View style={styles.RowLayout}>
          <View style={styles.flex1}>
          <Text>Recuperation</Text>
          </View>
          
          <View style={styles.flex2}>
            <Icon source="circle" color="green" />
          </View>

          <View style={styles.flex3}>
            <Image 
              source={require('../assets/cat.jpg')}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Load")}>
        <View style={styles.RowLayout}>
          <View style={styles.flex1}>
          <Text>Load</Text>
          </View>
          
          <View style={styles.flex2}>
            <Icon source="circle" color="green" />
          </View>

          <View style={styles.flex3}>
            <Image 
              source={require('../assets/cat.jpg')}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Unload")}>
        <View style={styles.RowLayout}>
          <View style={styles.flex1}>
          <Text>Unload</Text>
          </View>
          
          <View style={styles.flex2}>
            <Icon source="circle" color="green" />
          </View>

          <View style={styles.flex3}>
            <Image 
              source={require('../assets/cat.jpg')}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </View>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    gap: 10,
  },
  RowLayout: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: "100%"
  },
  flex1: {
    flex: 7,
  },
  flex2: {
    flex: 1
  },
  flex3: {
    flex: 1,
    flexDirection: "row-reverse"
  }
});
