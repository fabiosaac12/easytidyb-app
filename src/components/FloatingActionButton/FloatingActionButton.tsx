import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useStyles } from './FloatingActionButtonStyles';

interface Props {
  iconName: string;
  position: 'br' | 'bl';
  onPress: () => void;
}

export const FloatingActionButton = (props: Props) => {
  const styles = useStyles();
  const { position, iconName } = props;

  return (
    <View style={[styles.container, styles[position]]}>
      <TouchableNativeFeedback
        onPress={props.onPress}
        background={TouchableNativeFeedback.Ripple('#00000020', false, 30)}
      >
        <View style={styles.fab}>
          <Icon size={32} name={iconName} style={styles.icon} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
