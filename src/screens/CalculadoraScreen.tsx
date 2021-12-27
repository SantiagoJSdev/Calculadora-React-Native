import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { style } from '../theme/appTheme';

export const CalculadoraScreen = () => {
    return (
        <View style={style.calculadoraContainer}>
            <Text style={style.resultadoPequeño}>1,500.00</Text>
            <Text style={style.resultado}>1,500.00</Text>

{/* ////////////////fila de botones ////////////// */}
            <View style={style.fila}>
                <BotonCalc texto='C' color='#9b9b9b'/>
                <BotonCalc texto='+/-' color='#9b9b9b'/>
                <BotonCalc texto='del' color='#9b9b9b'/>
                <BotonCalc texto='/' color='#ff9427'/>
            </View>
            {/* ////////////////fila de botones ////////////// */}

            <View style={style.fila}>
                <BotonCalc texto='7'   />
                <BotonCalc texto='8' />
                <BotonCalc texto='9' />
                <BotonCalc texto='*' color='#ff9427'/>
            </View>

            <View style={style.fila}>
                <BotonCalc texto='4'   />
                <BotonCalc texto='5' />
                <BotonCalc texto='6' />
                <BotonCalc texto='-' color='#ff9427'/>
            </View>

            <View style={style.fila}>
                <BotonCalc texto='1'   />
                <BotonCalc texto='2' />
                <BotonCalc texto='3' />
                <BotonCalc texto='+' color='#ff9427'/>
            </View>

            <View style={style.fila}>
                <BotonCalc texto='0' ancho  />
           
                <BotonCalc texto='.' />
                <BotonCalc texto='=' color='#ff9427'/>
            </View>

        </View>
    )
}
