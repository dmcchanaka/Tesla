import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

import CarContainer from './components/CarItem/index';

export default function App() {
  return (
    <View style={styles.container}>
      <CarContainer 
        name={"Car X"}
        tagline={"Order Online for"}
        taglineCTA={"Touchless Delivery"}
        image={require('./assets/images/ModelX.jpeg')}
      />
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
