import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import imgLogo from './assets/images.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={imgLogo} style={styles.imgLogo}/>
      </View>
      <Text>Guilherme Ploeger</Text>
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
  logo: {
    width: 128,
    height: 128
  }
});
