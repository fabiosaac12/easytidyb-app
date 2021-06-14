import React from 'react';
import { ScrollView } from 'react-native';
import { Loader } from '../../components/Loader';
import { Snackbar } from '../../components/Snackbar';
import { useStyles } from './BaseLayoutStyles';

export const BaseLayout = ({ children, navigation }) => {
  const style = useStyles();

  return (
    <>
      <Loader />
      <Snackbar />
      <ScrollView style={style}>{children}</ScrollView>
    </>
  );
};
