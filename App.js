import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, View, TouchableOpacity } from 'react-native';
import BotaoCustomizado from './comum/componentes/BotaoCustomizado/BotaoCustomizado';
import CORES from './comum/constantes/cores';

const estilos = StyleSheet.create({
  tudo: {
    //flex 1 faz preencher a tela inteira
    flex: 1,
    // backgroundColor: '#ffdb58',
    backgroundColor: CORES.FUNDO_PADRAO,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  contador: {
    fontSize: 72,
    color: CORES.TEXTO_PADRAO
  },
  botao: {
    backgroundColor: 'blue',
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    fontSize: 48,
    color: '#fff',
  }
});

export default function App() {
  const [contador, setContador] = React.useState(0);

  return (


    <View style={estilos.tudo}>

      {/* <BotaoCustomizado /> */}

      <BotaoCustomizado cor='primaria' onPress={() => setContador(contador - 1)}>
        -
      </BotaoCustomizado>

      <Text style={estilos.contador}>{contador}</Text>

      <BotaoCustomizado cor='secundaria' onPress={() => setContador(contador + 1)}>
        +
      </BotaoCustomizado>

      {/* <StatusBar estilos={botaoTexto} style="auto" /> */}
    </View>
  );
}


