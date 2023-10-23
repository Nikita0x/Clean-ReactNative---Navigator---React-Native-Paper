import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CustomCard = () => (
  <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Text variant="titleLarge">Beautiful Mountains</Text>
      <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores quo perferendis fuga quaerat? Illo magni consectetur sed veniam qui?</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default CustomCard;