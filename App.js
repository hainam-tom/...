import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pancake Paradise</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://images.unsplash.com/photo-1587730766004-639e3cfdfb51?w=800' }}
        accessibilityLabel="Stack of pancakes with syrup"
      />
      <Text style={styles.description}>
        Pancakes are a delicious breakfast treat. Enjoy them with syrup, fruit, or butter!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  description: {
    fontSize: 18,
    textAlign: 'center'
  }
});
