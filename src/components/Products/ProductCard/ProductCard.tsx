import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useModal } from '../../Modal';
import { Text } from '../../Theme';
import { Product } from '../models/Product';
import { useStyles } from './ProductCardStyles';
import { ProductsUpdateForm } from '../ProductsUpdateForm/ProductsUpdateForm';
import { ProductsDeleteModal } from '../ProductsDeleteModal/ProductsDeleteModal';

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const modal = useModal();
  const styles = useStyles();

  return (
    <View key={product._id} style={styles.container}>
      <View style={styles.defaultImage}>
        <Icon size={45} name="business" style={styles.defaultImageIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text numberOfLines={1} style={styles.char1}>
          {product.char1}
        </Text>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          onPress={() =>
            modal.handleOpen({
              content: <ProductsUpdateForm productId={product._id} />,
            })
          }
          activeOpacity={0.8}
          style={styles.actionButton}
        >
          <Icon name="edit" style={styles.editIcon} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            modal.handleOpen({
              content: <ProductsDeleteModal productId={product._id} />,
            })
          }
          activeOpacity={0.8}
          style={styles.actionButton}
        >
          <Icon name="delete" style={styles.deleteIcon} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
