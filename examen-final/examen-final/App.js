import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Inicio from './components/Inicio';
import Filtrar from './components/Filtrar';
import Consultar from './components/Consultar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Sexo" component={Filtrar} />
        <Tab.Screen name="Consultar" component={Consultar} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
