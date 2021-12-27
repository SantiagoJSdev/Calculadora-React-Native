import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { style } from '../theme/appTheme';

export const CalculadoraScreen = () => {
    return (
        <View style={style.calculadoraContainer}>
            <Text style={style.resultadoPequeño}>1,500.00</Text>
            <Text style={style.resultado}>1,500.00</Text>


            <View style={style.fila}>

                <BotonCalc texto='C' color='#9b9b9b'/>
                <BotonCalc texto='+/-' color='#9b9b9b'/>
                <BotonCalc texto='del' color='#9b9b9b'/>
                <BotonCalc texto='/' color='#ff9427'/>

            

            </View>


        </View>
    )
}
