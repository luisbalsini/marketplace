import { SafeAreaView } from 'react-native';
import React from 'react';
import Login from './modules/login';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
