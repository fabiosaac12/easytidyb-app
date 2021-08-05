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
  canSearch?: boolean;
  disabled?: boolean;
}

export function Select<T>({
  data,
  label,
  placeholder,
  value,
  setValue,
  canSearch = true,
  disabled = false,
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
        disabled={disabled}
        style={[styles.container, selectedOption && styles.containerWithValue]}
        onPress={handleShowOptionList}
      >
        <Text
          variant="body2"
          style={[
            !selectedOption && styles.placeholder,
            disabled && styles.disabled,
          ]}
        >
          {selectedOption ? label : placeholder}
        </Text>
        {selectedOption && (
          <Text style={[styles.value, disabled && styles.disabled]}>
            {selectedOption.label}
          </Text>
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
        canSearch={canSearch}
      />
    </>
  );
}
