import React from "react";
import { View } from "react-native";
import estilos from "./TelaFormularioStyle";
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import CampoTextoCustomizado from '../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import CORES from "../../comum/constantes/cores";

const TelaFormulario = () => {

    const [campoNome, setCampoNome] = React.useState('');
    const [campoSobrenome, setCampoSobrenome] = React.useState('');
    const [campoCPF, setcampoCPF] = React.useState('');


    const salvar = () => {
        console.log('Salvar:', { campoNome, campoSobrenome, campoCPF });
      };

    return (
        <View style={estilos.container}>

            <View style={{alignItems: 'center'}}>
                <FontAwesome5 name='tv' size={45} color={CORES.SECUNDARIA}/>
            </View>

            <CampoTextoCustomizado label='Nome'  value={campoNome}  onChangeText={setCampoNome} />
            <CampoTextoCustomizado label='sobrenome' value={campoSobrenome}  onChangeText={setCampoSobrenome} />
            <CampoTextoCustomizado label='CPF'  inputMode='numeric' value={campoCPF} onChangeText={setcampoCPF} />
            <BotaoCustomizado onPress={salvar}>Salvar</BotaoCustomizado>
        </View>
    );
};

export default TelaFormulario;