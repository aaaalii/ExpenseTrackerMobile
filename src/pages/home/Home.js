import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/header';
import TransactionCard from './components/TransactionCard';
import headerBg from '../../assets/images/header-bg.png';
import BottomNavigation from '../../components/BottomNavigation';
import DefaultLayout from '../../Layout/Default';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const expenseList = Array.from(
    useSelector(state => state.expense.expenseList),
  );
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView
        style={{
          backgroundColor: '#f5f5f5',
        }}>
        <DefaultLayout>
          <Header />
        </DefaultLayout>
        <View style={{marginTop: 80, paddingHorizontal: 22}}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 20, fontWeight: 700}}>
                Transactions History
              </Text>
              {expenseList.length !== 0 && (
                <Pressable onPress={() => navigation.navigate('List')}>
                  <Text>See all</Text>
                </Pressable>
              )}
            </View>
            <View style={{marginTop: 20}}>
              {expenseList.length !== 0 ? (
                expenseList
                  .reverse()
                  .slice(0, 3)
                  .map((value, index) => (
                    <View key={index}>
                      <TransactionCard
                        amount={value.amount}
                        title={value.title}
                        date={value.date}
                        pic={headerBg}
                      />
                    </View>
                  ))
              ) : (
                <View>
                  <Text>No expense added</Text>
                </View>
              )}
            </View>
          </View>
          {/* <View style={{marginVertical: 30}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 20, fontWeight: 700}}>Send again</Text>
              <Text>See all</Text>
            </View>
            <View
              style={{
                marginTop: 15,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={headerBg}
                alt=""
                maxWidth={50}
                maxHeight={50}
                height={'100%'}
              />
              <Image
                source={headerBg}
                alt=""
                maxWidth={50}
                maxHeight={50}
                height={'100%'}
              />
              <Image
                source={headerBg}
                alt=""
                maxWidth={50}
                maxHeight={50}
                height={'100%'}
              />
              <Image
                source={headerBg}
                alt=""
                maxWidth={50}
                maxHeight={50}
                height={'100%'}
              />
              <Image
                source={headerBg}
                alt=""
                maxWidth={50}
                maxHeight={50}
                height={'100%'}
              />
            </View>
          </View> */}
        </View>
      </ScrollView>
      <BottomNavigation isHome={true} />
    </>
  );
}
