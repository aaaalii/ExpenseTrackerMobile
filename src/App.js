import React, {useState} from 'react';
import Home from './pages/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import New from './pages/AddNew/New';
import Statistics from './pages/statistics/Statistic';
import {persistor, store} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Expenses from './pages/expenses/Expenses';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: 'rgb(0, 0, 0)',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
                color: '#fff',
              },
            }}>
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
            <Stack.Screen
              name="Statistics"
              component={Statistics}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="List"
              component={Expenses}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
