import React, {useState, useEffect} from 'react';
import {View, Text, Button, Modal, StyleSheet, Pressable} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarModal = ({show, onClose, onSelectDate}) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(show);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    setIsCalendarVisible(show);
  }, [show]);

  const hideCalendar = () => {
    setIsCalendarVisible(false);
    onClose();
  };

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
    onSelectDate(day.dateString);
    hideCalendar();
  };

  return (
    <Modal
      visible={isCalendarVisible}
      transparent
      onRequestClose={hideCalendar}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Calendar
            style={{
              width: '80%',
            }}
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: 'rgb(42, 124, 118)',
              },
            }}
          />
          <Pressable style={styles.addButton} onPress={hideCalendar}>
            <Text style={styles.addButtonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  addButton: {
    marginTop: 24,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#2A7C76',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CalendarModal;
