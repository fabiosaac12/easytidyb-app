import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from '../../Theme';
import { Sale } from '../models/Sale';
import { useStyles } from './SaleCardStyles';

interface Props {
  sale: Sale;
}

export const SaleCard: FC<Props> = ({ sale }) => {
  const styles = useStyles();

  return (
    <View key={sale._id} style={styles.container}>
      <View style={styles.defaultImage}>
        <Icon size={45} name="business" style={styles.defaultImageIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {sale.client}
        </Text>
        <Text numberOfLines={1} style={styles.char1}>
          {sale.date}
        </Text>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.actionButton}>
          <Icon name="edit" style={styles.editIcon} size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.actionButton}>
          <Icon name="delete" style={styles.deleteIcon} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
