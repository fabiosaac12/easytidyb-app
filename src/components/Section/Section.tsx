import React from 'react';
import { View } from 'react-native';
import { useSection } from './context';
import { useStyles } from './SectionStyles';
import { Text, Button } from '../Theme';

export const Section = () => {
  const { data, section, loading, error } = useSection();

  console.log(data);
  
  const styles = useStyles();

  return (
    <>
      <Text variant="title">Hola que tal</Text>
      <Text variant="title2">Hola que tal</Text>
      <Text variant="subtitle">Hola que tal</Text>
      <Text variant="subtitle2">Hola que tal</Text>
      <Text variant="body">Hola que tal</Text>
      <Text variant="body2">Hola que tal</Text>

      <Button color="red" title="Button" />
    </>
  );
};
