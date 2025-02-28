import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import {useNavigation} from '@react-navigation/native';
import {LineChart} from 'react-native-gifted-charts';
import Card from './components/Card';
import {useSelector} from 'react-redux';
import {useState} from 'react';

export default function Statistics() {
  const [highToLow, setHighToLow] = useState(true);
  const navigation = useNavigation();
  const data = Array.from(useSelector(state => state.expense.expenseList));

  const chartData = data.map(item => ({
    value: item.amount,
    label:
      new Date(item.date).getDate() +
      '/' +
      (parseInt(new Date(item.date).getMonth(), 10) + 1),
  }));
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView
        style={{
          backgroundColor: '#f5f5f5',
        }}>
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
              source={require('../../assets/icons/chevron-left-black.png')}
              maxWidth={28}
              maxHeight={28}
              height={100}
            />
          </Pressable>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 600,
            }}>
            Statistics
          </Text>
          <Image
            // source={require('../../assets/icons/download.png')}
            style={{
              width: 28,
              height: 28,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 32,
            marginTop: 55,
          }}>
          <Pressable
            style={{
              backgroundColor: '#438883',
              paddingHorizontal: 33,
              paddingVertical: 12,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              Day
            </Text>
          </Pressable>
          <Pressable
            style={{
              // paddingHorizontal: 33,
              paddingVertical: 12,
              borderRadius: 10,
            }}>
            <Text>Week</Text>
          </Pressable>
          <Pressable
            style={{
              // paddingHorizontal: 33,
              paddingVertical: 12,
              borderRadius: 10,
            }}>
            <Text>Month</Text>
          </Pressable>
          <Pressable
            style={{
              // backgroundColor: '#438883',
              // paddingHorizontal: 33,
              paddingVertical: 12,
              borderRadius: 10,
            }}>
            <Text>Year</Text>
          </Pressable>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 50,
              width: '95%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>Amount</Text>
            <LineChart
              data={chartData}
              xAxisLabelTextStyle={{color: 'black', fontSize: 12}}
              yAxisLabelTextStyle={{color: 'black', fontSize: 12}}
              xAxisLabelRotation={-45}
              yAxisLabelRotation={0}
              // xAxisLabelFormatter={value => new Date(value).toLocaleDateString()}
              yAxisLabelFormatter={value => `$${value}`}
              startFillColor="rgba(69, 180, 173, 0.62)"
              startOpacity={0.8}
              endFillColor="rgba(90, 190, 184, 0.19)"
              endOpacity={0.3}
              // width={300}
              areaChart
              curved
              xAxisLabel="Date"
              yAxisLabel="Amount"
            />
          </View>
          <Text>Date</Text>
        </View>
        <View
          style={{
            marginTop: 60,
            paddingHorizontal: 22,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              {highToLow ? 'Top Spending' : 'Least Spending'}
            </Text>
            <Pressable
              onPress={() => setHighToLow(!highToLow)}
              style={{
                height: 0,
              }}>
              <Image
                source={require('../../assets/icons/bx-sort.png')}
                height={22}
                maxHeight={22}
                maxWidth={22}
              />
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            {data
              .sort((a, b) =>
                highToLow ? b.amount - a.amount : a.amount - b.amount,
              )
              .slice(0, 3)
              .map((value, index) => (
                <View key={index}>
                  <Card
                    amount={value.amount}
                    image={require('../../assets/images/header-bg.png')}
                    title={value.title}
                    date={value.date}
                  />
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
      <BottomNavigation isHome={false} />
    </>
  );
}
