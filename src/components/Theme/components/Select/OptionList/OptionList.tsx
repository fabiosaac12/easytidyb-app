import React from 'react';
import { Modal, View, FlatList, TouchableOpacity } from 'react-native';
import { Option } from '../models/Option';
import { useStyles } from './OptionListStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from '../../Text';
import { SearchInput } from '../../SearchInput';

interface Props<T> {
  visible: boolean;
  handleHide: () => void;
  value: T;
  setValue: (value: T) => void;
  options: Option<T>[];
  canSearch?: boolean;
}

export function OptionList<T>({
  options,
  visible,
  handleHide,
  setValue,
  value,
  canSearch,
}: Props<T>) {
  const styles = useStyles();

  const handleSelectOption = (value: T) => {
    setValue(value);
    handleHide();
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={handleHide}
    >
      <View style={styles.backdrop}>
        <View style={styles.container}>
          {canSearch && <SearchInput placeholder="Buscar..." />}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={options}
            keyExtractor={(option, index) => `${option.value}${index}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleSelectOption(item.value)}
                style={[
                  styles.option,
                  value === item.value && styles.disabledOption,
                ]}
                disabled={value === item.value}
              >
                <View style={styles.defaultImage}>
                  <Icon
                    size={40}
                    name="business"
                    style={styles.defaultImageIcon}
                  />
                </View>
                <View style={styles.content}>
                  <Text style={styles.label} numberOfLines={1}>
                    {item.label}
                  </Text>
                  {!!item.extra && (
                    <Text numberOfLines={1} style={styles.extra}>
                      {item.extra}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}
