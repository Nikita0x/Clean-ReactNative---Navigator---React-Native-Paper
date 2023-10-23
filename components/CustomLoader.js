import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const CustomLoader = (props) => (
  <ActivityIndicator size={props.size} animating={true} color={props.color} />
);

export default CustomLoader;