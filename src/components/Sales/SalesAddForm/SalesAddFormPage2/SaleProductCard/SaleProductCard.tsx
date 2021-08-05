import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from '../../../../Theme';
import { useStyles } from './SaleProductCardStyles';
import { FormValues, SaleProduct } from '../../models/FormValues';
import { useEffect } from 'react';
import { useProducts } from '../../../../Products';
import { useState } from 'react';
import { useModal } from '../../../../Modal';
import { EditSaleProductForm } from '../SaleProductForms/EditSaleProductForm';
import { counterMapValues } from '../SaleProductForms/helpers';
import { Product } from '../../../../Products/models/Product';
import { useFormikContext } from 'formik';

interface Props {
  saleProduct: SaleProduct;
  remove: () => void;
  edit: (saleProduct: SaleProduct) => void;
}

export const SaleProductCard: FC<Props> = ({ saleProduct, remove, edit }) => {
  const styles = useStyles();
  const modal = useModal();
  const products = useProducts();
  const formik = useFormikContext<FormValues>();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (products.data) {
      const product = products.data.find(
        (product) => product._id === saleProduct.productId,
      );

      product && setProduct(product);
    }
  }, [saleProduct]);

  return (
    <TouchableOpacity
      onPress={() =>
        product &&
        modal.handleOpen({
          content: (
            <EditSaleProductForm
              initialValues={counterMapValues(saleProduct)}
              product={product}
              saleType={formik.values.type}
              editSaleProduct={edit}
            />
          ),
        })
      }
      activeOpacity={0.8}
      key={saleProduct.productId}
      style={styles.container}
    >
      <View style={styles.defaultImage}>
        <Icon size={45} name="category" style={styles.defaultImageIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {product?.name || 'Desconocido'}
        </Text>
        {product?.char1 && (
          <Text numberOfLines={1} style={styles.chars}>
            {product?.char1} {product?.char2}
          </Text>
        )}
        <Text numberOfLines={1} style={styles.info}>
          Cantidad: {saleProduct.quantity}
        </Text>
        <Text numberOfLines={1} style={styles.info}>
          Obtenido: {saleProduct.obtained}$
        </Text>
        <Text numberOfLines={1} style={styles.info}>
          Ganancia: {saleProduct.profit}$
        </Text>
        <Text numberOfLines={1} style={styles.info}>
          Descuento: {saleProduct.discount}%
        </Text>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.actionButton}
          onPress={remove}
        >
          <Icon name="delete" style={styles.deleteIcon} size={40} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
