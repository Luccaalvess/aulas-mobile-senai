import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CORES from './comum/constantes/cores';
import TelaContador from './telas/TelaContador/TelaContador';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './telas/TelaPrincipal/TelaPrincipal';
import TELAS from './comum/constantes/telas';
import TelaFormulario from './telas/TelaFormulario/TelaFormulario';

import TelaListaTarefas from './telas/TelaListaTarefas/TelaListaTarefas';

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
        <Stack.Navigator screenOptions={{ cardStyle: {flex: 1 } }}>
          <Stack.Screen 
          name={TELAS.TELA_PRINCIPAL}
          component={TelaPrincipal} 
          options={{
            title: 'Principal',
           }}
          />

          <Stack.Screen name={TELAS.TELA_CONTADOR} component={TelaContador} options={{title: 'Tela Contador'}}/>
          <Stack.Screen name={TELAS.TELA_FORMULARIO} component={TelaFormulario} options={{title: 'Tela Formulário'}}/>
          <Stack.Screen name={TELAS.TELA_LISTA_TAREFAS} component={TelaListaTarefas} options={{title: 'Lista Tarefas'}}/>
        </Stack.Navigator>
      </NavigationContainer>     
      {/* <TelaContador /> */}

      <StatusBar style="auto" />
    </View>
  );
};


