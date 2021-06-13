import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useLoader } from './context';
import { useStyles } from './LoaderStyles';

export const Loader = () => {
  const { loading } = useLoader();
  const styles = useStyles();

  if (!loading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={styles.loadder.color} />
    </View>
  );
};
