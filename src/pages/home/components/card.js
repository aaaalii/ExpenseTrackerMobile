import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

export default function Card() {
  const [total, setTotal] = useState(0);
  const expenseList = Array.from(
    useSelector(state => state.expense.expenseList),
  );

  useEffect(() => {
    let expenseTotal = 0;
    expenseList.forEach(value => {
      expenseTotal += value.amount;
    });
    setTotal(expenseTotal);
  }, [expenseList, total]);

  return (
    <>
      <LinearGradient colors={['#429690', '#2A7C76']} style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: 'white', fontWeight: 700}}>Total Expense</Text>
            <Text style={{color: 'white', fontWeight: 800, fontSize: 30}}>
              Rs {total}
            </Text>
          </View>
          {/* <View>
            <Text style={{fontSize: 30, fontWeight: 700, color: 'white'}}>
              ...
            </Text>
          </View> */}
        </View>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: 'white', fontWeight: 700}}>Income</Text>
            <Text style={{color: 'white', fontWeight: 700}}>23,00,000</Text>
          </View>
          <View>
            <Text style={{color: 'white', fontWeight: 700}}>Expenses</Text>
            <Text style={{color: 'white', fontWeight: 700}}>12,00,000</Text>
          </View>
        </View> */}
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 202,
    backgroundColor: '#2F7E79',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 5px 13px #2A7C76',
  },
});
