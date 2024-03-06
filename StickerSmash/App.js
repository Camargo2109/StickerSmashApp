import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import ImageViewer from './src/components/ImageViewer';
import Button from './src/components/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/pelé.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Escolher Foto" theme="primary"/>
        <Button label="Usar esta Foto"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});