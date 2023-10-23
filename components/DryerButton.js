import * as React from 'react';
import { Button, Icon } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';

const DryerButton = (props) => (
  <Button contentStyle={styles.buttonContainer} mode="contained" onPress={props.onPress}>
    <View style={styles.content}>
      <Text style={styles.title}>{props.title}</Text>
      <Icon source="circle" color="green" />
      <Text style={styles.text}>Loaded: {props.loaded}</Text>
    </View>
  </Button>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 200,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: "white"
  },
  text: {
    color: "white"
  },
  content: {
    alignItems: 'center', 
    gap: 10,
  },
});

export default DryerButton;
