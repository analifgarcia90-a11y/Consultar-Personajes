import React, { useEffect, useState } from 'react';
import {View,Pressable,FlatList,Text,Image,StyleSheet,ActivityIndicator,
} from 'react-native';

export default function CharactersFilter() {
  const [characters, setCharacters] = useState([]);
  const [gender, setGender] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar personajes:', error);
        setLoading(false);
      });
  }, []);

  const filtered = gender
    ? characters.filter(c => c.gender === gender)
    : characters;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#C0392B" />
        <Text style={styles.loadingText}>Cargando personajes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtrar por Sexo</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setGender('Male')}>
          <Text style={styles.buttonText}>Hombres</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setGender('Female')}>
          <Text style={styles.buttonText}>Mujeres</Text>
        </Pressable>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Image
              source={{ uri: item.image }}
              style={styles.flag}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.subItem}>Raza: {item.race || 'Desconocida'}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE5D3', // fondo beige claro retro
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#C0392B', // rojo retro
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#F1C40F',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F1C40F', // amarillo vintage
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#7D6608', // verde oliva
  },
  buttonText: {
    color: '#6E2C00', // marrón oscuro
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDEBD0', // fondo de tarjeta retro
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#D35400', // naranja quemado
  },
  flag: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#BA4A00',
  },
  item: {
    color: '#7D6608', // texto principal retro
    fontSize: 18,
    fontWeight: 'bold',
  },
  subItem: {
    color: '#6E2C00', // texto secundario
    fontSize: 14,
    marginTop: 2,
  },
  listContent: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#FAE5D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#7D6608',
    fontStyle: 'italic',
  },
});
