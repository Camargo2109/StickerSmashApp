import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import ImageViewer from './src/components/ImageViewer';
import Button from './src/components/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled){
      selectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("Você não selecionou a imagem");
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
        placeholderImageSource={PlaceholderImage}
        selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button 
          label="Escolher Foto" 
          theme="primary"
          onPress={pickImageAsync}
          />
        <Button 
        label="Usar esta Foto"
        onPress={() => setShowAppOptions(true)}
        />
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