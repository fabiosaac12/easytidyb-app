import React from 'react';
import { View, TextInput, TextInputProps, ViewProps } from 'react-native';
import { useStyles } from './SearchInputStyles';

interface Props extends TextInputProps {
  containerProps?: ViewProps;
}

export const SearchInput: React.FC<Props> = ({
  style,
  containerProps,
  ...props
}) => {
  const styles = useStyles();

  return (
    <View {...containerProps} style={[styles.view, containerProps?.style]}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={styles.placeholder.color}
        {...props}
      />
    </View>
  );
};
