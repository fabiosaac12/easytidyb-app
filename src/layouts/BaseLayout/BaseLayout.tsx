import React from 'react';
import { View } from 'react-native';
import { Snackbar } from '../../components/Snackbar';
import { Modal } from '../../components/Modal';
import { Loader } from '../../components/Loader';
import { useStyles } from './BaseLayoutStyles';

export const BaseLayout: React.FC = ({ children }) => {
  const style = useStyles();

  return (
    <>
      <Modal />
      <Snackbar />
      <Loader />
      <View style={style.layout}>{children}</View>
    </>
  );
};
