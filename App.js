import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import TouristLocation from './src/components/TouristLocation';
import { styles } from './src/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <TouristLocation
      styleText={styles.text}
      Name="Recanto do Japonês"
      adress="dpjwefj"
      description="erferver"
      ImageSource={require('./src/assets/images/recantojapones.jpg')}/>
    </View>
  );
}


