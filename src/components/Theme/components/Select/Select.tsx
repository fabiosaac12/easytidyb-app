import React, { Dispatch, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Option } from './models/Option';
import { OptionList } from './OptionList';
import { useStyles } from './SelectStyles';

interface Props<T> {
  data: Option<T>[];
  label: string;
  placeholder: string;
  value: T;
  setValue: Dispatch<T>;
}

export function Select<T>({
  data,
  label,
  placeholder,
  value,
  setValue,
}: Props<T>) {
  const styles = useStyles();
  const [optionListVisible, setOptionListVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState<Option<T>>();

  useEffect(() => {
    value && setSelectedOption(data.find((option) => option.value === value));
  }, [value]);

  const handleShowOptionList = () => setOptionListVisible(true);
  const handleHideOptionList = () => setOptionListVisible(false);

  return (
    <>
      <TouchableOpacity
        style={[styles.container, selectedOption && styles.containerWithValue]}
        onPress={handleShowOptionList}
      >
        <Text variant="body2" style={!selectedOption && styles.placeholder}>
          {selectedOption ? label : placeholder}
        </Text>
        {selectedOption && (
          <Text style={styles.value}>{selectedOption.label}</Text>
        )}
      </TouchableOpacity>
      {/* <Button
        title={selectedOption?.label || label}
        onPress={handleShowOptionList}
        style={value && styles.buttonWithValue}
      /> */}
      <OptionList
        options={data}
        visible={optionListVisible}
        handleHide={handleHideOptionList}
        setValue={setValue}
        value={value}
      />
    </>
  );
}
