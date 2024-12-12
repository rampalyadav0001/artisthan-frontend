import { router } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Auth = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://tsdevil.fun/CG_Project1/raws/i2.jpg' }}
        style={styles.image}
        resizeMode='cover'
      >
        <View style={styles.content}>
          <Text style={styles.title}>Magnificence is Handcrafted</Text>
          <Text style={styles.subtitle}>
            Dive into the rich cultural heritage of India from the comfort of
            your homes.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPressIn={() => router.navigate('/(auth)/Login')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={() => router.navigate('/(auth)/Registration')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: width,
    height: height,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF0000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Auth;
