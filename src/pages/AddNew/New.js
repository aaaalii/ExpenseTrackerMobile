import {Text} from '@react-navigation/elements';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import DefaultLayout from '../../Layout/Default';
import { useNavigation } from '@react-navigation/native';
import Card from './components/addNewCard';

export default function New() {
  const navigation = useNavigation();
  return (
    <>
      <DefaultLayout>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 24,
            marginTop: 40,
          }}>
          <Pressable width={28} height={28} onPress={() => {
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
            Add expense
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 900,
            }}>
            ...
          </Text>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
          <Card/>
        </View>
      </DefaultLayout>
    </>
  );
}
