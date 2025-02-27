import React, {useState, useCallback} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import img from '../../../assets/images/header-bg.png';
import {Dropdown} from 'react-native-element-dropdown';

export default function Card() {
  const [value, setValue] = useState(null);
  const data = [
    {
      label: 'Netflix',
      value: '1',
      image: img,
    },
    {
      label: 'Spotify',
      value: '2',
      image: img,
    },
  ];

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
  };

  // Memoize the renderLeftIcon function
  const renderLeftIcon = useCallback(() => {
    if (value) {
      const selectedItem = data.find(item => item.value === value);
      return <Image source={selectedItem.image} style={styles.icon} />;
    }
    return null;
  }, [data, value]);

  return (
    <View style={styles.container}>
      <View>
        <Text>Name</Text>
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            placeholder="Select"
            labelField="label"
            valueField="value"
            value={value}
            onChange={item => setValue(item.value)}
            renderItem={renderItem}
            renderLeftIcon={renderLeftIcon}
            data={data}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
  },
  dropdownContainer: {
    width: '100%',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
