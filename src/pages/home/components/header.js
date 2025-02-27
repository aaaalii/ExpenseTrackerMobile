import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import image from '../../../assets/icons/notification.png';
import Card from './card';

export default function Header() {
  const styles = StyleSheet.create({
    container: {
      height: 300,
      borderBottomLeftRadius: 90,
      borderBottomRightRadius: 90,
    },
    greetings: {
      color: 'white',
    },
    name: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    p4: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
      padding: 24,
    },
    notification: {
      width: 40,
      height: 40,
    },
  });

  return (
    <>
        <View style={styles.p4}>
          <View>
            <Text style={styles.greetings}>Good afternoon,</Text>
            <Text style={styles.name}>John Doe</Text>
          </View>
          <Image style={styles.notification} source={image} alt="" />
        </View>
        <View style={{paddingHorizontal: 24}}>
          <Card />
        </View>
    </>
  );
}
