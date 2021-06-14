import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useStyles } from './SnackbarStyles';
import { useSnackbar } from './context';
import { Text } from '../Theme';

export const Snackbar = () => {
  const styles = useStyles();
  const { mode, message, visible, handleHide } = useSnackbar();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (visible) timeout = setTimeout(handleHide, 5000);

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={[styles.container, styles[mode]]}>
      <Text variant="button">{message}</Text>
    </View>
  );
};
