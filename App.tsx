
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { style } from './src/theme/appTheme'



export const App = () => {
  return (
      <SafeAreaView style={style.fondo}>

        <StatusBar
        //con esto pinto de color la barra de arriba de la bateria señal
        backgroundColor='black' 
        barStyle='light-content'
        />

       <CalculadoraScreen/>
       </SafeAreaView>
   
       
  )
}
