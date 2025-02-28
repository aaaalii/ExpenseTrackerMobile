import {Image, Text, View} from 'react-native';

export default function TransactionCard({pic, title, amount, date, type}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 50, height: 50}}>
            <Image
              source={pic}
              alt=""
              maxWidth={50}
              maxHeight={50}
              height={'100%'}
            />
          </View>
          <View style={{marginLeft: 9}}>
            <Text style={{fontSize: 15, }}>{title === 0 ? 'Netflix' : 'Amazon Prime'}</Text>
            <Text style={{fontSize: 15, }}>{date}</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 15, color: 'red'}}>- Rs {amount}</Text>
        </View>
      </View>
    </>
  );
}
