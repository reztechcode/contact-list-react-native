import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListKontak from './components/Contact.js';
import DetailKontak from './components/ContactDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListKontak">
        <Stack.Screen
          name="ListKontak"
          component={ListKontak}
          options={{ title: 'Daftar Kontak' }}
        />
        <Stack.Screen
          name="DetailKontak"
          component={DetailKontak}
          options={{ title: 'Detail Kontak' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
