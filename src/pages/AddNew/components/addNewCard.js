import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import {Dropdown, SelectCountry} from 'react-native-element-dropdown';
import CalendarModal from './CalendarModal';
import {pick} from '@react-native-documents/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {addExpense} from '../../../store/expenseSlice';

export default function Card() {
  const [selectedTitle, setTitle] = useState(null);
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [invoice, setInvoice] = useState(null);

  const dispatch = useDispatch();

  const dropdownData = [
    {
      label: 'Netflix',
      value: 0,
      image: require('../../../assets/images/header-bg.png'),
    },
    {
      label: 'Amazon Prime',
      value: 1,
      image: require('../../../assets/images/header-bg.png'),
    },
  ];

  useEffect(() => {}, [showCalendar]);

  const addNewExpense = async () => {
    if(selectedTitle === null || amount === null || date === ''){
      Alert.alert('All fields are required');
      return;
    }
    const d = Date.now().toString();
    console.log(d);
    dispatch(
      addExpense({
        id: d,
        title: selectedTitle,
        amount: parseFloat(amount),
        date: date,
      }),
    );
    setTitle(null);
    setAmount(null);
    setDate(null);
    Alert.alert('Expense added!');
    return;
  };

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text>NAME</Text>
          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            data={dropdownData}
            labelField="label"
            valueField="value"
            imageField="image"
            placeholder="Select an option"
            value={selectedTitle}
            onChange={item => {
              setTitle(item.value);
            }}
            renderItem={renderItem}
            // renderSelectedItem={renderItem}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>AMOUNT</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={setAmount}
            value={amount}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>DATE</Text>
          <Pressable
            onPress={() => setShowCalendar(true)}
            style={styles.datePressable}>
            <Text>{date || 'Select Date'}</Text>
          </Pressable>
          <CalendarModal
            show={showCalendar}
            onClose={() => setShowCalendar(false)}
            onSelectDate={setDate}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <Text>INVOICE</Text>
          <Pressable
            style={styles.file}
            onPress={async () => {
              try {
                const [pickResult] = await pick();
                setInvoice(pickResult);
              } catch (err) {
                // see error handling
              }
            }}>
            <Image
              source={require('../../../assets/icons/plus-circle.png')}
              width={24}
              height={24}
              maxWidth={24}
              maxHeight={24}
              style={{
                marginRight: 5,
              }}
            />
            <Text>Add Invoice</Text>
          </Pressable>
        </View> */}
        <Pressable style={styles.addButton} onPress={addNewExpense}>
          <Text style={styles.addButtonText}>Add Expense</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    boxShadow: '0px 1px 25px rgba(42, 124, 118, 0.39)',
    marginTop: 60,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 24,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 5,
    height: 50,
  },
  file: {
    flexDirection: 'row',
    borderStyle: 'dotted',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePressable: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    marginTop: 24,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#2A7C76',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  itemImage: {
    width: 32,
    height: 32,
  },
  itemText: {
    marginLeft: 16,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
});
