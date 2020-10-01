import React from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard, Platform, Image,
     TextInput, TouchableOpacity, TouchableWithoutFeedback, StatusBar } from 'react-native';
import {Feather} from '@expo/vector-icons';
import styles from './styles';
import logoImg from '../../../assets/logo.png';
import TextCustom from '../../../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';
import { memoria } from '../../../utils/memoria';
import { usuario } from '../../../utils/consts';
//import {} from '@expo';

export default function SignUp1(){
const [nome,setNome] = React.useState('')    
const [email,setEmail] = React.useState('')
const [senha,setSenha] = React.useState('')
const [confirmaSenha,setConfirmaSenha] = React.useState('')
const [endereco,setEndereco] = React.useState('')
const [contato,setContato] = React.useState('')   
    
    const navigation = useNavigation();

    function handleToLogin(){
        navigation.navigate('Login')
    }

    function handleToSignUp2(){
        navigation.navigate('SignUp2')
    }
    
    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.select({
                ios: 'padding',
                android: null,
            })}
            >
        <StatusBar backgroundColor="#000F14"/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.marginArea}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleToLogin}>
                    <Feather name="arrow-left" size={24} color="#F2994A"/>
                </TouchableOpacity>
                <TextCustom style={styles.headerText}>Cadastro</TextCustom>
                <Image source={logoImg} style={styles.logoImg}/>
            </View>
            <View style={styles.content}>
                <TextCustom style={styles.textInputSignUp}>Nome:</TextCustom>
                    <TextInput 
                    textContentType={"name"}
                    style={styles.inputColor}
                    placeholder='Nome e Sobrenome'
                    placeholderTextColor="#A0A0A0"
                    returnKeyType="next"
                    onChangeText={text=>{setNome(text)}}
                    >{nome}
                    </TextInput>
                    <TextCustom style={styles.textInputSignUp}>Email:</TextCustom>
                    <TextInput
                        textContentType={"emailAddress"}
                        style={styles.inputColor}
                        placeholder='example@email.com'
                        placeholderTextColor="#A0A0A0"
                        returnKeyType="next"
                        onChangeText={text=>{setEmail(text)}}
                        >{email}</TextInput>
                    <TextCustom style={styles.textInputSignUp}>Senha:</TextCustom>
                    <TextInput
                        textContentType={"password"}
                        style={styles.inputColor}
                        placeholder='password'
                        placeholderTextColor="#A0A0A0"
                        returnKeyType="next"
                        onChangeText={text=>{setSenha(text)}}
                        >{senha}</TextInput>
                    <TextCustom style={styles.textInputSignUp}>Confirmar Senha:</TextCustom>
                    <TextInput
                        textContentType={"password"}
                        style={styles.inputColor}
                        placeholder='confirm password'
                        placeholderTextColor="#A0A0A0"
                        returnKeyType="next"
                        onChangeText={text=>{setConfirmaSenha(text)}}
                        >{confirmaSenha}</TextInput>
                    <TextCustom style={styles.textInputSignUp}>Endereço:</TextCustom>
                    <TextInput
                        textContentType={"fullStreetAddress"}
                        multiline={true}
                        style={styles.inputColorAutoGrow}
                        placeholder='Rua, Numero, Bairro'
                        placeholderTextColor="#A0A0A0"
                        returnKeyType="next"
                        onChangeText={text=>setEndereco(text)}
                        >{endereco}</TextInput>
                    <TextCustom style={styles.textInputSignUp}>Contato:</TextCustom>
                    <TextInput
                        textContentType={"telephoneNumber"}
                        style={styles.inputColor}
                        placeholder='55(11)8888-8888'
                        placeholderTextColor="#A0A0A0"
                        returnKeyType="next"
                        onChangeText={text=>setContato(text)}
                        >{contato}</TextInput>
                    
            </View>
            <Button onPress={()=>{
                if(senha === confirmaSenha){
                    memoria(usuario,(user)=>{
                        user.nome = nome 
                        user.login = email 
                        user.senha = senha 
                        user.endereco = endereco 
                        user.contato = contato
                        navigation.navigate('SignUp2')
                        return user
                    })
                }else{
                    alert('As senhas diferem')
                }
            }} type="clear" title="Continuar"  titleStyle={styles.buttonStyle}/>
            <View style={{ height: 1 }} />
            </View>
            
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}