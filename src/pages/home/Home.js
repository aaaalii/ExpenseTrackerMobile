import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/header';
import TransactionCard from './components/TransactionCard';
import headerBg from '../../assets/images/header-bg.png';
import BottomNavigation from '../../components/BottomNavigation';
import DefaultLayout from '../../Layout/Default';

export default function Home() {
  const styles = StyleSheet.create({});
  return (
    <>
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
              <Text>See all</Text>
            </View>
            <View style={{marginTop: 20}}>
              <TransactionCard
                amount={'40,000'}
                title={'Netflix'}
                date={'Today'}
                pic={headerBg}
              />
              <TransactionCard
                amount={'40,000'}
                title={'Netflix'}
                date={'Today'}
                pic={headerBg}
              />
              <TransactionCard
                amount={'40,000'}
                title={'Netflix'}
                date={'Today'}
                pic={headerBg}
              />
              <TransactionCard
                amount={'40,000'}
                title={'Netflix'}
                date={'Today'}
                pic={headerBg}
              />
              <TransactionCard
                amount={'40,000'}
                title={'Netflix'}
                date={'Today'}
                pic={headerBg}
              />
              <TransactionCard
                amount={'40,000'}
                title={'Netflix'}
                date={'Today'}
                pic={headerBg}
              />
              <TransactionCard
                amount={'40,000'}
                title={'Netflix'}
                date={'Today'}
                pic={headerBg}
              />
            </View>
          </View>
          <View style={{marginVertical: 30}}>
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
          </View>
        </View>
      </ScrollView>
      <BottomNavigation />
    </>
  );
}
