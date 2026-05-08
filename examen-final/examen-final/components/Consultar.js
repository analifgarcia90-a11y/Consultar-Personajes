import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function CharacterSearch() {
  const [search, setSearch] = useState('');
  const [allCharacters, setAllCharacters] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then(res => res.json())
      .then(data => setAllCharacters(data.items))
      .catch(err => console.error('Error al cargar personajes:', err));
  }, []);

  const handleSearch = () => {
    if (search.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = allCharacters.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Buscar Personaje</Text>

      {/* Input y botón en una fila */}
      <View style={styles.searchRow}>
        <TextInput
          placeholder="Consulta tu personaje"
          placeholderTextColor="#A04000"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Consultar</Text>
        </Pressable>
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.itemText}>Nombre: {item.name}</Text>
              <Text style={styles.subItemText}>Raza: {item.race || 'Desconocida'}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAD7A0',
    padding: 15,
  },
  title: {
    fontSize: 22,
    color: '#C0392B',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: '#F1C40F',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#FEF9E7',
    borderWidth: 2,
    borderColor: '#F1C40F',
    color: '#7D6608',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#F1C40F',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#7D6608',
  },
  buttonText: {
    color: '#6E2C00',
    fontWeight: 'bold',
    fontSize: 14,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDEBD0',
    padding: 10,
    marginBottom: 8,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#D35400',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#BA4A00',
  },
  itemText: {
    color: '#7D6608',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subItemText: {
    color: '#6E2C00',
    fontSize: 14,
    marginTop: 4,
  },
});
