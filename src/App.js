import React from 'react';
import Home from './pages/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import New from './pages/AddNew/New';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(0, 0, 0)',  // Change header background color
          },
          headerTintColor: '#fff', // Change text (title) color
          headerTitleStyle: {
            fontWeight: 'bold',  // Change title font weight
            fontSize: 24,       // Change title font size
            color: '#fff',      // Set title text color
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddNew"
          component={New}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
