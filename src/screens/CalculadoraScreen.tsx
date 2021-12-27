import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { style } from '../theme/appTheme';

export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')

    const limpiar =()=>{
    setNumero('0')
}

const armarNumero = (numeroTexto: string) =>{

    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')){

        //punto decimal
        if (numeroTexto === '.') {
            setNumero(numero + numeroTexto)

            // evaluar si es otro cero y si hay un punto

        }else if (numeroTexto === '0' && numero.includes('.') ) {
            setNumero(numero + numeroTexto)

            // evaluar si es diferente de cero y no tiene un punto 
        } else if (numeroTexto !== '0' && !numero.includes('.')){
            setNumero(numeroTexto)

            // evitar 0000.0
        }else if (numeroTexto === '0' && !numero.includes('.')) {
            setNumero(numero)
        }else {
            setNumero(numero + numeroTexto)
        }
    } else {
        setNumero(numero + numeroTexto)
    }

  
}

    const positivoNegativo = () =>{
        if (numero.includes('-')){
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    const btnDelete = () => {
      let negativo = '';
      let numTemporal = numero;

      if (numero.includes('-')) {
          negativo = '-';
          numTemporal = numero.substring(1)
      }

      if (numTemporal.length > 1){
          setNumero(negativo + numTemporal.slice(0, -1))
      } else {
          setNumero('0')
      }
    }

    return (
        <View style={style.calculadoraContainer}>
            <Text style={style.resultadoPequeño}>{numeroAnterior}</Text>
            <Text 
            style={style.resultado}
            numberOfLines={1}
            // con esta propiedad se va achicando el num no le coloco igual a true xq react lo asume
            adjustsFontSizeToFit
            
            >
                {numero}
                
            </Text>

{/* ////////////////fila de botones ////////////// */}
            <View style={style.fila}>
                <BotonCalc texto='C' color='#9b9b9b' accion={limpiar}/>
                <BotonCalc texto='+/-' color='#9b9b9b' accion={positivoNegativo}/>
                <BotonCalc texto='del' color='#9b9b9b' accion={btnDelete}/>
                <BotonCalc texto='/' color='#ff9427' accion={limpiar}/>
            </View>
            {/* ////////////////fila de botones ////////////// */}

            <View style={style.fila}>
                <BotonCalc texto='7' accion={armarNumero}  />
                <BotonCalc texto='8' accion={armarNumero} />
                <BotonCalc texto='9' accion={armarNumero}/>
                <BotonCalc texto='*' color='#ff9427' accion={limpiar} />
            </View>

            <View style={style.fila}>
                <BotonCalc texto='4'  accion={armarNumero} />
                <BotonCalc texto='5' accion={armarNumero} />
                <BotonCalc texto='6' accion={armarNumero}/>
                <BotonCalc texto='-' color='#ff9427' accion={limpiar}/>
            </View>

            <View style={style.fila}>
                <BotonCalc texto='1'  accion={armarNumero} />
                <BotonCalc texto='2' accion={armarNumero} />
                <BotonCalc texto='3' accion={armarNumero}/>
                <BotonCalc texto='+' color='#ff9427' accion={limpiar}/>
            </View>

            <View style={style.fila}>
                <BotonCalc texto='0' ancho accion={armarNumero} />
           
                <BotonCalc texto='.' accion={armarNumero}/>
                <BotonCalc texto='=' color='#ff9427' accion={limpiar}/>
            </View>

        </View>
    )
}
