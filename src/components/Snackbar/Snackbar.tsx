import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useStyles } from './SnackbarStyles';
import { useSnackbar } from './context';
import { Text } from '../Theme';
import { Modal } from 'react-native';

export const Snackbar = () => {
  const styles = useStyles();
  const { mode, message, visible, handleHide } = useSnackbar();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (visible) {
      timeout = setTimeout(handleHide, 5000);
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [visible]);

  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={handleHide}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleHide}
        style={styles.backdrop}
      >
        <View style={[styles.container, styles[mode]]}>
          <Text variant="button">{message}</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
