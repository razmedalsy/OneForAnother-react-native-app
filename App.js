import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigations from './src/Navigations/StackNavigations';
export default function App() {
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="mediumpurple" />
      <StackNavigations />
    </NavigationContainer>
  );
}
