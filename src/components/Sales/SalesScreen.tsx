import React from 'react';
import { FlatList, View } from 'react-native';
import { withLayout } from '../../hoc';
import { useSales } from './context';
import { useStyles } from './SalesScreenStyles';
import { SaleCard } from './SaleCard';
import { FloatingActionButton } from '../FloatingActionButton';
import { StackScreenProps } from '@react-navigation/stack';
import { SalesStackNavigatorProps } from './SalesNavigatorStack';

interface Props extends StackScreenProps<SalesStackNavigatorProps, 'list'> {}

export const SalesScreen = withLayout<Props>(({ navigation }) => {
  const sales = useSales();
  const styles = useStyles();

  return (
    <>
      <FlatList
        ListHeaderComponent={<View style={styles.spacer} />}
        ListFooterComponent={<View style={styles.spacer} />}
        showsVerticalScrollIndicator={false}
        data={sales.data}
        keyExtractor={(supplier) => supplier._id}
        renderItem={({ item }) => <SaleCard sale={item} />}
      />
      <FloatingActionButton
        iconName="add"
        onPress={() => navigation.navigate('add')}
        position="br"
      />
    </>
  );
});
