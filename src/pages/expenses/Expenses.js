import {Text} from '@react-navigation/elements';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DefaultLayout from '../../Layout/Default';
import {useDispatch, useSelector} from 'react-redux';
import {removeExpense} from '../../store/expenseSlice';

export default function New() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const expenseList = Array.from(
    useSelector(state => state.expense.expenseList),
  );

  const deleteExpense = obj => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete?', // Message
      [
        {
          text: 'Cancel', // Cancel button
          onPress: () => console.log('Delete cancelled'), // Handle cancel action
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(removeExpense(obj));
            // console.log('Item deleted');
          },
        },
      ],
      {cancelable: true}, // Disable closing the alert by tapping outside
    );
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <DefaultLayout>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 24,
            marginTop: 40,
          }}>
          <Pressable
            width={28}
            height={28}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/icons/chevron-left.png')}
              maxWidth={28}
              maxHeight={28}
              height={100}
            />
          </Pressable>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 600,
            }}>
            All expenses
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 900,
            }}></Text>
        </View>
        {expenseList.length !== 0 ? (
          <ScrollView
            style={{
              backgroundColor: 'white',
              marginHorizontal: 20,
              borderRadius: 20,
              padding: 20,
              height: 600,
              boxShadow: '0px 5px 13px rgba(12, 12, 12, 0.47)',
            }}>
            {expenseList.reverse().map((value, index) => (
              <View key={index}>
                <View
                  style={{
                    marginBottom: 20,
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontStyle: 'italic',
                        fontSize: 17,
                        fontWeight: 'bold',
                      }}>
                      Title: {value.title === 0 ? 'Netflix' : 'Amazon Prime'}
                    </Text>
                    <Text>Date: {value.date}</Text>
                    <Text
                      style={{
                        marginBottom: 5,
                      }}>
                      Amount: {value.amount}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Update', {
                        id: value.id,
                      });
                    }}>
                    <Text style={styles.updateButton}>Update</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      deleteExpense(value);
                    }}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View
            style={{
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              No expense added
            </Text>
          </View>
        )}
      </DefaultLayout>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  deleteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  updateButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(42, 124, 118)',
  },
});
