import React, { FC, useEffect, useState } from 'react';
import { useModal } from '../../Modal';
import { Button, Text } from '../../Theme';
import { Product } from '../models/Product';
import { useProducts } from '../context/useProducts';
import { useStyles } from './ProductsDeleteModalStyles';

interface Props {
  productId: string;
}

export const ProductsDeleteModal: FC<Props> = ({ productId }) => {
  const styles = useStyles();
  const products = useProducts();
  const modal = useModal();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const product = products.data?.find((product) => product._id === productId);

    setProduct(product);
  }, []);

  const handleSubmit = () => {
    products.delete(productId);
    modal.handleHide();
  };

  return (
    <>
      <Text style={styles.title}>
        Estas seguro de querer eliminar el producto {product?.name}
      </Text>
      <Button
        style={styles.cancelButton}
        color="secondary"
        title="CANCELAR"
        onPress={modal.handleHide}
      />
      <Button color="primary" title="ACEPTAR" onPress={handleSubmit} />
    </>
  );
};
