import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CORES from './comum/constantes/cores';
import TelaContador from './telas/TelaContador/TelaContador';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './telas/TelaPrincipal/TelaPrincipal';
import TELAS from './comum/constantes/telas';

const Stack = createStackNavigator();

const estilos = StyleSheet.create({
  todoApp: {
    //flex 1 faz preencher a tela inteira
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO,
  },
});

export default function App() {
  return (
    <View style={estilos.todoApp}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} />
          <Stack.Screen name={TELAS.TELA_CONTADOR} component={TelaContador} />
        </Stack.Navigator>
      </NavigationContainer>     
      {/* <TelaContador /> */}

      <StatusBar style="auto" />
    </View>
  );
};


