import React, { Dispatch, FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { useStyles } from './DatePickerStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  label: string;
  placeholder: string;
  value: Date;
  setValue: Dispatch<Date>;
}

export const DatePicker: FC<Props> = ({
  setValue,
  value,
  label,
  placeholder,
}) => {
  const styles = useStyles();
  const [calendarVisible, setCalendarVisible] = useState(false);

  const handleShowCalendar = () => setCalendarVisible(true);
  const handleHideCalendar = () => setCalendarVisible(false);

  return (
    <>
      <TouchableOpacity
        style={[styles.container, value && styles.containerWithValue]}
        onPress={handleShowCalendar}
      >
        <Text variant="body2" style={!value && styles.placeholder}>
          {value ? label : placeholder}
        </Text>
        {value && <Text style={styles.value}>{value.toDateString()}</Text>}
      </TouchableOpacity>
      {calendarVisible && (
        <DateTimePicker
          mode="date"
          display="calendar"
          maximumDate={new Date()}
          value={value}
          onChange={(_: Event, date?: Date) => {
            date && setValue(date);
            handleHideCalendar();
          }}
          onTouchCancel={handleHideCalendar}
        />
      )}
    </>
  );
};
