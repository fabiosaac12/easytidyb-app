import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  TextProps,
  ViewProps,
} from 'react-native';
import { Text } from '../Text/Text';
import { useStyles } from './InputStyles';

interface Props extends TextInputProps {
  label: string;
  disabled?: boolean;
  containerProps?: ViewProps;
  labelProps?: TextProps;
}

export const Input: React.FC<Props> = ({
  label,
  style,
  labelProps,
  containerProps,
  disabled = false,
  ...props
}) => {
  const styles = useStyles();

  return (
    <View {...containerProps} style={[styles.view, containerProps?.style]}>
      <Text
        variant="body2"
        {...labelProps}
        style={[labelProps?.style, disabled && styles.disabledLabel]}
      >
        {label}
      </Text>
      {disabled ? (
        <Text style={[styles.disabledInput, style]}>{props.value}</Text>
      ) : (
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={styles.placeholder.color}
          {...props}
        />
      )}
    </View>
  );
};
