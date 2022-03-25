import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

import CarList from './components/CarList/index';

export default function App() {
  return (
    <View style={styles.container}>
      <CarList />
      <StatusBar style="auto" />
    </View>
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
