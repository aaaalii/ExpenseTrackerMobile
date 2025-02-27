import {Image, Pressable, Text, View} from 'react-native';
import home from '../assets/icons/Vector.png';
import bar from '../assets/icons/bars.png';
import wallet from '../assets/icons/wallet.png';
import user from '../assets/icons/person.png';
import add from '../assets/icons/new.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function BottomNavigation() {
  const navigate = useNavigation();
  return (
    <>
      <View
        style={{
          height: 80,
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '30%',
            marginRight: 60,
          }}>
          <Image
            source={home}
            width={30}
            maxWidth={30}
            maxHeight={30}
            height={'100%'}
          />
          <Image
            source={bar}
            width={30}
            maxWidth={30}
            maxHeight={30}
            height={'100%'}
          />
        </View>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', '#f5f5f5']}
          locations={[0, 0.5, 1]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{
            position: 'absolute',
            top: -60,
            borderRadius: 50,
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => navigate.navigate('AddNew')}>
            <Image
              source={add}
              width={75}
              maxWidth={75}
              maxHeight={75}
              height={'100%'}
              style={{
                boxShadow: '0px 5px 13px #2A7C76',
                borderRadius: 50,
              }}
            />
          </Pressable>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '30%',
          }}>
          <Image
            source={wallet}
            width={30}
            maxWidth={30}
            maxHeight={30}
            height={'100%'}
          />
          <Image
            source={user}
            width={30}
            maxWidth={30}
            maxHeight={30}
            height={'100%'}
          />
        </View>
      </View>
    </>
  );
}
