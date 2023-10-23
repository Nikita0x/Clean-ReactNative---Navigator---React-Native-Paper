import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

const CustomModal = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>{props.text}</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        {props.title}
      </Button>
      </>
  );
};

export default CustomModal;