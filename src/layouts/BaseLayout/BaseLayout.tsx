import React from 'react';
import { ScrollView } from 'react-native';
import { Snackbar } from '../../components/Snackbar';
import { useStyles } from './BaseLayoutStyles';

export const BaseLayout: React.FC = ({ children }) => {
  const style = useStyles();

  return (
    <>
      <Snackbar />
      <ScrollView style={style.layout}>{children}</ScrollView>
    </>
  );
};
