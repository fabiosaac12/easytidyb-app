import React from 'react';
import { View, Modal as RNModal } from 'react-native';
import { useModal } from './context';
import { useStyles } from './ModalStyles';

export const Modal: React.FC = () => {
  const { handleHide, visible, content } = useModal();
  const styles = useStyles();

  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleHide}
    >
      <View style={styles.backdrop}>
        <View style={styles.container}>{content}</View>
      </View>
    </RNModal>
  );
};
