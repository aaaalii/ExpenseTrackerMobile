import {View} from 'react-native';
import {Image} from 'react-native';
import {Text} from 'react-native';

export default function Card({image, title, date, amount, type}) {
  return (
    <>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Image source={image} maxWidth={30} maxHeight={30} />
          <View style={{
            marginLeft: 15,
          }}>
            <Text>{title === 0 ? 'Netflix' : 'Amazon Prime'}</Text>
            <Text>{date}</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: type === 'credit' ? 'green' : 'red',
            }}>
            - {amount}
          </Text>
        </View>
      </View>
    </>
  );
}
