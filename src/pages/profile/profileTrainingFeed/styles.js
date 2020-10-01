import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000F14"
    },
    content:{
        flex:1,
        marginTop: 10,
        marginLeft:24,
        marginRight:24,
    },
    header:{
        
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 120
        
    },
    headerTextContainer:{
        
    },
    headerButtonContainer:{
        marginRight: 0
    },
    headerText:{
        fontSize: 16,
        color: "#E5E5E5",
    },
    infoFeed: {
        marginTop: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: "#053A41",
        
    },
    lineInfo:{
        marginBottom: 10,
        flexDirection: "row"
    },
    infoTextOrange:{
        fontSize: 16,
        color: "#F2994A"
        
    },
    infoTextWhite:{
        fontSize: 16,
        color: "#E5E5E5"
    },
    trainingList:{
        
        marginTop: 24,
    },
    training:{
        backgroundColor: "#12181E",
        borderRadius: 15,
        padding: 24,
        marginBottom: 16,
        
    },
    infoTextOrangeTraining:{
        fontSize: 16,
        color: "#F2994A"
    },
    infoTextWhiteTraining:{
        fontSize: 16,
        color: "#E5E5E5",
        marginRight: 32
    },

})