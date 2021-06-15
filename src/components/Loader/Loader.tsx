import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useLoader } from './context';
import { useStyles } from './LoaderStyles';

export const Loader = () => {
  const { visible } = useLoader();
  const styles = useStyles();

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={styles.loader.color} />
    </View>
  );
};
