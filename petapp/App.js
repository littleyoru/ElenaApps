import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReportMissingPet from './screens/ReportMissingPet';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Pet App' }} />
      <Stack.Screen
        name='Report'
        component={ReportMissingPet}
        options={{ title: 'Report missing pet' }} />
    </Stack.Navigator>
  )
}

const GoldenTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#D4AF37'
  }
}

export default function App() {
  return (
    <NavigationContainer theme={GoldenTheme} style={styles.nav}>{RootStack()}</NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'blue'
  }
});
