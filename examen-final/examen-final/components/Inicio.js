import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/dragonq.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Dragon Ball</Text>
      <Text style={styles.subtitle}>Autor: Anali Garcia</Text>
      <Text style={styles.subtitle}>Grupo: 6P</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE5D3', // fondo retro beige claro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 220,
    height: 140,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#BA4A00', // naranja quemado retro
  },
  title: {
    fontSize: 30,
    color: '#C0392B', // rojo retro
    fontWeight: 'bold',
    fontFamily: 'System',
    marginBottom: 12,
    textShadowColor: '#F1C40F', // sombra amarilla vintage
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: '#7D6608', // verde oliva
    backgroundColor: '#FDEBD0', // fondo tipo papel antiguo
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 8,
    fontWeight: '600',
  },
  
});
