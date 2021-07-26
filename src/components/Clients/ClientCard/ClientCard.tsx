import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useModal } from '../../Modal';
import { Text } from '../../Theme';
import { ClientsDeleteModal } from '../ClientsDeleteModal';
import { Client } from '../models/Client';
import { ClientsUpdateForm } from '../ClientsUpdateForm';
import { useStyles } from './ClientCardStyles';

interface Props {
  client: Client;
}

export const ClientCard: FC<Props> = ({ client }) => {
  const modal = useModal();
  const styles = useStyles();

  return (
    <View key={client._id} style={styles.container}>
      <View style={styles.defaultImage}>
        <Icon size={45} name="business" style={styles.defaultImageIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {client.name}
        </Text>
        <Text numberOfLines={1} style={styles.contact}>
          {client.contact}
        </Text>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          onPress={() =>
            modal.handleOpen({
              content: <ClientsUpdateForm clientId={client._id} />,
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
              content: <ClientsDeleteModal clientId={client._id} />,
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
