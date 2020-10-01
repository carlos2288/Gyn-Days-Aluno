import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import {Feather} from '@expo/vector-icons';
import TextCustom from '../../../utils/fonts';
import { useNavigation } from '@react-navigation/native';

export default function TrainingFeed(){

    const navigation = useNavigation();

    function handleToAddTraining(){
        navigation.navigate('AddTraining');
    }

    return(
        
        <View style={styles.container}>
            <StatusBar backgroundColor="#000F14"/>

            <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                <TextCustom style={styles.headerText}>Feed de Treinos</TextCustom>
                </View>
                <View style={styles.headerButtonContainer}>
                <TouchableOpacity onPress={handleToAddTraining}>
                <Feather name="plus" color="#F2994A" size={24} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.infoFeed}>
                <View style={styles.lineInfo}>
                <TextCustom style={styles.infoTextOrange}>Objetivo: </TextCustom>
                <TextCustom style={styles.infoTextWhite}>Emagrecer</TextCustom>
                </View>
                <View style={styles.lineInfo}>
                <TextCustom style={styles.infoTextOrange}>Frequência: </TextCustom>
                <TextCustom style={styles.infoTextWhite}>3 vezes por semana</TextCustom>
                </View>
                <View style={styles.lineInfo}>
                <TextCustom style={styles.infoTextOrange}>Orientador: </TextCustom>
                <TextCustom style={styles.infoTextWhite}>Roberto</TextCustom>
                </View>
                <View style={styles.lineInfo}>
                <TextCustom style={styles.infoTextOrange}>Data de inicio: </TextCustom>
                <TextCustom style={styles.infoTextWhite}>03/02/2020</TextCustom>
                </View>
            </View>

            {/* Lista de Exercícios Diários */}

            <FlatList 
                data={[1,2,3,4,5]}
                style={styles.trainingList}
                keyExtractor={training => String(training)}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                    
                <View style ={styles.training}>
                <View style={styles.lineInfo}>
                <TextCustom style={styles.infoTextOrangeTraining}>Exercicio: </TextCustom>
                <TextCustom style={styles.infoTextWhiteTraining}>Flexões</TextCustom>
                </View>
                <View style={styles.lineInfo}>
                <TextCustom style={styles.infoTextOrangeTraining}>Repetições: </TextCustom>
                <TextCustom style={styles.infoTextWhiteTraining}>20</TextCustom>
                </View>
                <View style={styles.lineInfo}>
                <TextCustom style={styles.infoTextOrangeTraining}>Séries: </TextCustom>
                <TextCustom style={styles.infoTextWhiteTraining}>4</TextCustom>
                </View>
                <View style={styles.lineInfo}>
                <TextCustom style={styles.infoTextOrangeTraining}>Descrição: </TextCustom>
                <TextCustom style={styles.infoTextWhiteTraining}>Séries alternadas de Flexão de joelhos e completa</TextCustom>
                </View>
                <View style={styles.lineInfo}>
                <TextCustom style={styles.infoTextOrangeTraining}>Status: </TextCustom>
                <TextCustom style={styles.infoTextWhiteTraining}>Aguardando</TextCustom>
                </View>
                </View>
                )} />

            
            </View>
        </View>
    );
}