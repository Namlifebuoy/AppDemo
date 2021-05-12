import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import DetailsScreen from './screens/DetailsScreen';
import SignupScreen from './screens/SignupScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login" component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailsScreen}  />
        <Stack.Screen name="Signup" component={SignupScreen}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
