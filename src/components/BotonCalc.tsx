import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from '../theme/appTheme';

interface props {
texto: string;
//aqui coloco signo de interrogacion indicando q es opcional q se envie
color?: string;
ancho?: boolean;
}

export const BotonCalc = ({texto, color = '#2D2D2D', ancho= false}:props) => {
    return (

        <TouchableOpacity>
            <View style={{
                ...style.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
                
                
                }}>
                <Text style={{
                    ...style.botonTexto,
                    color:(color === '#9b9b9b') ? 'black' : 'white'
                    }}
                    
                    >{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
