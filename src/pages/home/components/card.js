import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Card() {
  return (
    <>
      <LinearGradient colors={['#429690', '#2A7C76']} style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: 'white', fontWeight: 700}}>
              Total Balance ^
            </Text>
            <Text style={{color: 'white', fontWeight: 800, fontSize: 30}}>
              450,00,000
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 700, color: 'white'}}>
              ...
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: 'white', fontWeight: 700}}>Income</Text>
            <Text style={{color: 'white', fontWeight: 700}}>23,00,000</Text>
          </View>
          <View>
            <Text style={{color: 'white', fontWeight: 700}}>Expenses</Text>
            <Text style={{color: 'white', fontWeight: 700}}>12,00,000</Text>
          </View>
        </View>
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
