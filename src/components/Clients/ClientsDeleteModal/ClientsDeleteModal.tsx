import React, { FC, useEffect, useState } from 'react';
import { useModal } from '../../Modal';
import { Button, Text } from '../../Theme';
import { Client } from '../models/Client';
import { useClients } from '../context/useClients';
import { useStyles } from './ClientsDeleteModalStyles';

interface Props {
  clientId: string;
}

export const ClientsDeleteModal: FC<Props> = ({ clientId }) => {
  const styles = useStyles();
  const clients = useClients();
  const modal = useModal();
  const [client, setClient] = useState<Client>();

  useEffect(() => {
    const client = clients.data?.find(
      (client) => client._id === clientId,
    );

    setClient(client);
  }, []);

  const handleSubmit = () => {
    clients.delete(clientId);
    modal.handleHide();
  };

  return (
    <>
      <Text style={styles.title}>
        Estas seguro de querer eliminar el cliente {client?.name}
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
