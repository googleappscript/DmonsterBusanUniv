import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Notification from './Notification';
import Menu from './Menu';
import Notice from './Notice';
import Inquiries from './Inquiries';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{ headerShown : false }} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Notice" component={Notice} />
        <Stack.Screen name="Inquiries" component={Inquiries} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;