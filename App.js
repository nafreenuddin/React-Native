import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyName from './components/myname';



export default function App() {
  return (
    <View style={styles.container}>
      <MyName />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: '50px',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
