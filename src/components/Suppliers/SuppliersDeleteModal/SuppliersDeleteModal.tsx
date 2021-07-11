import React, { FC, useEffect, useState } from 'react';
import { useModal } from '../../Modal';
import { Button, Text } from '../../Theme';
import { Supplier } from '../models/Supplier';
import { useSuppliers } from '../context/useSuppliers';
import { useStyles } from './SuppliersDeleteModalStyles';

interface Props {
  supplierId: string;
}

export const SuppliersDeleteModal: FC<Props> = ({ supplierId }) => {
  const styles = useStyles();
  const suppliers = useSuppliers();
  const modal = useModal();
  const [supplier, setSupplier] = useState<Supplier>();

  useEffect(() => {
    const supplier = suppliers.data?.find(
      (supplier) => supplier._id === supplierId,
    );

    setSupplier(supplier);
  }, []);

  const handleSubmit = () => {
    suppliers.delete(supplierId);
    modal.handleHide();
  };

  return (
    <>
      <Text style={styles.title}>
        Estas seguro de querer eliminar el proveedor {supplier?.name}
      </Text>
      <Button
        style={styles.cancelButton}
        color="secondary"
        title="Cancelar"
        onPress={modal.handleHide}
      />
      <Button color="primary" title="Aceptar" onPress={handleSubmit} />
    </>
  );
};
