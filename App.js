import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux';
import store from './redux/Store';
import Test from './test'


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Test/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
