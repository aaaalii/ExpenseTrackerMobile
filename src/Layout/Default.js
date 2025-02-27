import { ImageBackground, StyleSheet } from "react-native";
import headerBg from '../assets/images/header-bg.png';

export default function DefaultLayout({children}){
  return (
    <>
      <ImageBackground style={styles.container} source={headerBg}>
        {children}
      </ImageBackground>
    </>
  );
}

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