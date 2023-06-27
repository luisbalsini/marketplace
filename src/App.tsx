import { Text, SafeAreaView } from 'react-native';
import React from 'react';

const App = ({ x }: any) => {
  return (
    <SafeAreaView>
      <Text>Testando {x}</Text>
    </SafeAreaView>
  );
};

export default App;
