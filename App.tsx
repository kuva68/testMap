/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {ToastProvider} from 'react-native-toast-notifications';
import React from 'react';
import Layout from './src/navigation/Layout';
import {PaperProvider} from 'react-native-paper';
function App(): JSX.Element {
  return (
    <PaperProvider>
      <ToastProvider>
        <Layout />
      </ToastProvider>
    </PaperProvider>
  );
}
export default App;
