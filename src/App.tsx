import { SafeAreaView } from 'react-native';
import React from 'react';
import Login from './modules/login';
import { Provider } from 'react-redux';
import store from './store';
import GlobalModal from './shared/components/modal/globalModal/globalModal';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
