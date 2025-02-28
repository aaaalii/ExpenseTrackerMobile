import {Image, Pressable, Text, View} from 'react-native';
import home from '../assets/icons/Vector.png';
import bar from '../assets/icons/bars.png';
import add from '../assets/icons/new.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function BottomNavigation({isHome = true}) {
  const navigate = useNavigation();
  const route = useRoute();
  const routeName = route.name;
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
            marginRight: isHome && 60,
          }}>
          <Pressable onPress={() => navigate.navigate('Home')}>
            <Image
              source={routeName === 'Home' ? home : require('../assets/icons/home.png')}
              width={30}
              maxWidth={30}
              maxHeight={30}
              height={'100%'}
            />
          </Pressable>
        </View>
        {isHome && (
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
        )}
        <View
          style={{
            alignItems: 'center',
          }}>
          <Pressable onPress={() => navigate.navigate('Statistics')}>
            <Image
              source={routeName === 'Statistics' ? require('../assets/icons/bar-active.png') : bar}
              width={30}
              maxWidth={30}
              maxHeight={30}
              height={'100%'}
            />
          </Pressable>
        </View>
      </View>
    </>
  );
}
