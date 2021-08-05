import { StackScreenProps } from '@react-navigation/stack';
import { useFormikContext } from 'formik';
import React, { Dispatch, FC } from 'react';
import { FlatList, View } from 'react-native';
import { FloatingActionButton } from '../../../FloatingActionButton';
import { useModal } from '../../../Modal';
import { Button, Text } from '../../../Theme';
import { FormValues } from '../models/FormValues';
import { SalesAddFormStackNavigatorProps } from '../SalesAddForm';
import { AddSaleProductForm } from './SaleProductForms/AddSaleProductForm';
import { useStyles } from './SalesAddFormPage2Styles';
import { SaleProductCard } from './SaleProductCard';
import { SetStateAction } from 'react';
import { SaleProduct } from '../../models/SaleProduct';

interface Props
  extends StackScreenProps<SalesAddFormStackNavigatorProps, 'page2'> {
  addedProducts: string[];
  setAddedProducts: Dispatch<SetStateAction<string[]>>;
}

export const SalesAddFormPage2: FC<Props> = ({
  navigation,
  addedProducts,
  setAddedProducts,
}) => {
  const modal = useModal();
  const styles = useStyles();

  const formik = useFormikContext<FormValues>();

  const addSaleProduct = (saleProduct: SaleProduct) => {
    formik.setFieldValue('products', [...formik.values.products, saleProduct]);
    setAddedProducts((addedProducts) => [
      ...addedProducts,
      saleProduct.productId,
    ]);

    modal.handleHide();
  };

  const editSaleProduct = (
    productId: string,
    saleProductToEdit: SaleProduct,
  ) => {
    formik.setFieldValue(
      'products',
      formik.values.products.map((saleProduct) =>
        productId === saleProduct.productId ? saleProductToEdit : saleProduct,
      ),
    );

    modal.handleHide();
  };

  const removeSaleProduct = (saleProductToRemoveId: string) => {
    formik.setFieldValue(
      'products',
      formik.values.products.filter(
        (saleProduct) => saleProduct.productId !== saleProductToRemoveId,
      ),
    );

    setAddedProducts((addedProducts) =>
      addedProducts.filter(
        (addedProductId) => addedProductId !== saleProductToRemoveId,
      ),
    );
  };

  return (
    <>
      <Text style={styles.title}>Selecciona los productos de la venta</Text>
      <FlatList
        contentContainerStyle={styles.cardsContainer}
        data={formik.values.products}
        renderItem={({ item }) => (
          <SaleProductCard
            remove={() => removeSaleProduct(item.productId)}
            edit={(saleProduct: SaleProduct) =>
              editSaleProduct(item.productId, saleProduct)
            }
            saleProduct={item}
          />
        )}
        keyExtractor={(item) => `${item.productId}SaleProduct`}
      />
      <View style={styles.navigationButtonsContainer}>
        <Button
          title="Anterior"
          style={styles.previousButton}
          onPress={navigation.goBack}
        />
        <Button
          title="Siguiente"
          style={styles.nextButton}
          onPress={() => navigation.navigate('page3')}
          disabled={!formik.values.products.length}
        />
      </View>
      <FloatingActionButton
        onPress={() =>
          modal.handleOpen({
            content: (
              <AddSaleProductForm
                saleType={formik.values.type}
                addSaleProduct={addSaleProduct}
                addedProducts={addedProducts}
              />
            ),
          })
        }
        iconName="add"
        position="br"
      />
    </>
  );
};
