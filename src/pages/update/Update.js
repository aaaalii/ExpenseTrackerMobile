import { Image, Pressable, StatusBar, View } from 'react-native';
import DefaultLayout from '../../Layout/Default';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-svg';
import Card from './components/Card';

export default function Update({route}) {
  const navigation = useNavigation();
  const {id} = route.params;
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
            Update expense
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 900,
            }}>
            {/* ... */}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Card id={id}/>
        </View>
      </DefaultLayout>
    </>
  );
}
