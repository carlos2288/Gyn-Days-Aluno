import AsyncStorage from '@react-native-community/async-storage';
import { usuario } from './consts';
import User from '../model/User';
const storeData = async (variavel = usuario,value,func = (payload) =>{}) => {
    switch(variavel){
        case usuario:
            variavel = 'user'
            break
        default:
            variavel = 'user'
            break
    }

    try {
        const jsonValue = JSON.stringify(value)
        console.log(jsonValue)
        await AsyncStorage.setItem(variavel, jsonValue)
        console.log('salvo')
    } catch (e) {
        console.log('00 '+e)
    }
  }

  const getData = async (variavel = usuario,func = (payload)=>{}) => {
    switch(variavel){
        case usuario:
            variavel = 'user'
            break
        default:
            variavel = 'user'
            break
    }

    try {
        var jsonValue = await AsyncStorage.getItem(variavel)
        if(jsonValue != null) {
                func(jsonValue)
                console.log('lido')

            }else{
                var jsonValue = new User()
                jsonValue = JSON.stringify(jsonValue)
                func(jsonValue)
                console.log('lido null')
            }
    } catch(e) {
        console.log('01 '+e)
    }
  }


  export const memoria = async (variavel = usuario,func = async (payload)=>{})=>{
    getData(variavel,payload=>{
        try{
            var valor = JSON.parse(payload)
            valor = func(valor)
            storeData(variavel,valor)
        }catch(e){
            var valor = new User()
            valor = func(valor)
            storeData(variavel,valor)
            console.log('02 '+e)
        }
    })
  }