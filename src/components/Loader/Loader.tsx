import React from 'react';
import { View, ActivityIndicator, Modal as RNModal } from 'react-native';
import { useLoader } from './context';
import { useStyles } from './LoaderStyles';

export const Loader = () => {
  const { visible, handleHide } = useLoader();
  const styles = useStyles();

  if (!visible) {
    return null;
  }

  return (
    <RNModal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={handleHide}
    >
      <View style={styles.backdrop}>
        <ActivityIndicator size="large" color={styles.loader.color} />
      </View>
    </RNModal>
  );
};
