import React from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard, Platform, Image,
     TextInput, TouchableOpacity, TouchableWithoutFeedback, StatusBar } from 'react-native';
import {Feather} from '@expo/vector-icons';
import styles from './styles';

import TextCustom from '../../../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';


export default function AddTraining(){
    
    const navigation = useNavigation();

    function handleToTrainingFeed(){
        navigation.goBack()
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
                <TouchableOpacity onPress={handleToTrainingFeed}>
                    <Feather name="arrow-left" size={24} color="#F2994A"/>
                </TouchableOpacity>
                <TextCustom style={styles.headerText}>Novo Exercicio</TextCustom>
                
            </View>
            <View style={styles.content}>
                <TextCustom style={styles.textInputSignUp}>Nome do exercicio:</TextCustom>
                    <TextInput 
                    textContentType={"name"}
                    style={styles.inputColor}
                    placeholder='Ex: Flexão'
                    placeholderTextColor="#A0A0A0"
                    returnKeyType="next"
                    
                    >
                    </TextInput>

                    {/* Lugar para por pick number de 1 a até 7 dias por semana */}

                    <TextCustom style={styles.textInputSignUp}>Repetições:</TextCustom>
                    <TextInput
                        style={styles.inputColor}
                        placeholder='Ex: 20'
                        placeholderTextColor="#A0A0A0"
                        keyboardType="numeric"
                        returnKeyType="next"
                        ></TextInput>

                    <TextCustom style={styles.textInputSignUp}>Séries:</TextCustom>
                    <TextInput
                        style={styles.inputColor}
                        placeholder='Ex: 3'
                        placeholderTextColor="#A0A0A0"
                        keyboardType="numeric"
                        returnKeyType="next"
                        ></TextInput>

                    <TextCustom style={styles.textInputSignUp}>Descrição:</TextCustom>
                    <TextInput
                        style={styles.inputColorAutoGrow}
                        placeholder='Descreva detalhes do seu exercício'
                        placeholderTextColor="#A0A0A0"
                        returnKeyType="next"
                        multiline={true}
                        
                        
                        ></TextInput>
                    
                    
                    
            </View>
            <Button onPress={handleToTrainingFeed} type="clear" title="Concluir"  titleStyle={styles.buttonStyle}/>
            <View style={{ height: 1 }} />
            </View>
            
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}