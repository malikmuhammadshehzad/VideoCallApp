import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/Screen/HomeScreen';
import Navigation from './src/routes/Navigation';

const App = () => {
  return <Navigation />;
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
