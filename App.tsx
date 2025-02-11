import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import ServiceListScreen from './src/screens/ServiceListScreen';
import BookingScreen from './src/screens/BookingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Assist Services' }}
          />
          <Stack.Screen 
            name="Services" 
            component={ServiceListScreen} 
            options={{ title: 'Nos Services' }}
          />
          <Stack.Screen 
            name="Booking" 
            component={BookingScreen} 
            options={{ title: 'Réserver' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
