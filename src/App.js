/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import DishList from './components/Dish/DishList';

const styles = StyleSheet.create({
  dropdownItem: {
    height: 50,
    backgroundColor: '#95a5a6',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  safeArea: {
    flex: 1,
  },
});

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <DishList />
      </SafeAreaView>
    </>
  );
};

export default App;
