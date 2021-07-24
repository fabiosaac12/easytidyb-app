import React from 'react';
import { FlatList, View } from 'react-native';
import { withLayout } from '../../hoc';
import { useModal } from '../Modal';
import { useProducts } from './context';
import { useStyles } from './ProductsScreenStyles';
import { ProductCard } from './ProductCard';

export const ProductsScreen = withLayout(() => {
  const products = useProducts();
  const styles = useStyles();
  const modal = useModal();

  return (
    <FlatList
      ListHeaderComponent={<View style={styles.spacer} />}
      ListFooterComponent={<View style={styles.spacer} />}
      showsVerticalScrollIndicator={false}
      data={products.data}
      keyExtractor={(supplier) => supplier._id}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
});
