import React from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard, Platform, Image,
     TextInput, TouchableOpacity, TouchableWithoutFeedback, StatusBar } from 'react-native';
import {Feather} from '@expo/vector-icons';
import styles from './styles';
import logoImg from '../../../assets/logo.png';
import TextCustom from '../../../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';
import Login from '../../login';

export default function SignUp1(){
    
    const navigation = useNavigation();

    function handleToSignUp1(){
        navigation.goBack()
    }

    function handleToLogin(){
        navigation.navigate("Login");
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
                <TouchableOpacity onPress={handleToSignUp1}>
                    <Feather name="arrow-left" size={24} color="#F2994A"/>
                </TouchableOpacity>
                <TextCustom style={styles.headerText}>Cadastro</TextCustom>
                <Image source={logoImg} style={styles.logoImg}/>
            </View>
            <View style={styles.content}>
                <TextCustom style={styles.textInputSignUp}>Objetivo:</TextCustom>
                    <TextInput 
                    textContentType={"name"}
                    style={styles.inputColor}
                    placeholder='Objetivo'
                    placeholderTextColor="#A0A0A0"
                    returnKeyType="next"
                    
                    >
                    </TextInput>

                    {/* Lugar para por pick number de 1 a até 7 dias por semana */}

                    <TextCustom style={styles.textInputSignUp}>Orientador:</TextCustom>
                    <TextInput
                        style={styles.inputColor}
                        placeholder='Orientador'
                        placeholderTextColor="#A0A0A0"
                        returnKeyType="next"
                        ></TextInput>
                    
                    
            </View>
            <Button onPress={handleToLogin} type="clear" title="Continuar"  titleStyle={styles.buttonStyle}/>
            <View style={{ height: 1 }} />
            </View>
            
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}