import React from 'react';
import { View, StatusBar, TextInput } from 'react-native';
import styles from './styles';
import TextCustom from '../../../utils/fonts';
import {Avatar, Button} from 'react-native-elements';



export default function Profile(){

    
    

    return(
        
        <View style={styles.container}>
            <StatusBar backgroundColor="#000F14"/>

            <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                <TextCustom style={styles.headerText}>Perfil</TextCustom>
                </View>
            </View>
            <View style={styles.perfilElements}>
                <View style={styles.perfilPhoto}>
                    <Avatar 
                        rounded 
                        source={{uri: 'data:image/jpeg;base64,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'}}
                        size={100}
                        />
                </View>
                <View style={styles.infoFeed}>
                    <View style={styles.lineInfo}>
                    <TextCustom style={styles.infoTextOrange}>Nome: </TextCustom>
                    <TextCustom style={styles.infoTextWhite}>João da Silva</TextCustom>
                    </View>
                    <View style={styles.lineInfo}>
                    <TextCustom style={styles.infoTextOrange}>Nascimento: </TextCustom>
                    <TextCustom style={styles.infoTextWhite}>23/06/1997</TextCustom>
                    </View>
                    <View style={styles.lineInfo}>
                    <TextCustom style={styles.infoTextOrange}>Matricula: </TextCustom>
                    <TextCustom style={styles.infoTextWhite}>20200101040503</TextCustom>
                    </View>
                    <View style={styles.lineInfo}>
                    <TextCustom style={styles.infoTextOrangeTraining}>Endereço: </TextCustom>
                    <TextCustom style={styles.infoTextWhiteTraining}>Rua São Tomás, 123, São Joaquim</TextCustom>
                    </View>
                    <View style={styles.lineInfo}>
                    <TextCustom style={styles.infoTextOrange}>Contato: </TextCustom>
                    <TextCustom style={styles.infoTextWhite}>+55(85)98888-8888</TextCustom>
                    </View>
                </View>
            </View>
            <View style={styles.lineContainer}/>
            
            <View style={styles.date}>
                <TextCustom style={styles.infoTextWhite}>Data: 03/04/2020</TextCustom>
            </View>

            <View style={styles.inputContainers}>
            
            <View style={styles.inputContainer}>
                
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Peso: </TextCustom>
                    
                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Altura: </TextCustom>
                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Part. Esq.: </TextCustom>

                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Part. Dir.: </TextCustom>
                    
                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Coxa Esq.: </TextCustom>

                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Coxa Dir.: </TextCustom>
                </View>
                <View style={styles.inputLine}>
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Quadril: </TextCustom>
                    
                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Abdômen: </TextCustom>
                </View>
        
            </View>


            <View style={styles.inputContainer2}>
                
                <View style={styles.inputLine}>
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Cintura: </TextCustom>
                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Tórax: </TextCustom>
                    
                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Braço Esq.: </TextCustom>
                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Braço Dir.: </TextCustom>

                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>A. Braço Esq.: </TextCustom>
                    
                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>A. Braço Dir.: </TextCustom>

                </View>
                <View style={styles.inputLine}>
                    
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Punho Esq.: </TextCustom>
                </View>
                <View style={styles.inputLine}>
                    <TextInput style={styles.inputColor}
                        keyboardType="numeric"
                        maxLength={5}/>
                    <TextCustom style={styles.infoTextWhite}>Punho Dir: </TextCustom>
                    
                </View>
             
        
            </View>
            </View>

            <Button onPress={()=>{}} type="clear" title="Concluir"  titleStyle={styles.buttonStyle}/>

            

            
            </View>
        </View>
    );
}