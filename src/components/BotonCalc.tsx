import React from 'react'
import { View, Text } from 'react-native';
import { style } from '../theme/appTheme';

interface props {
texto: string;
//aqui coloco signo de interrogacion indicando q es opcional q se envie
color?: string;
}

export const BotonCalc = ({texto, color='2d2d2d'}:props) => {
    return (
        <View style={{
             ...style.boton,
             backgroundColor: color
            
            }}>
             <Text style={style.botonTexto}>{texto}</Text>
        </View>
    )
}
