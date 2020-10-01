import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';



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
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
        
    },
    headerTextContainer:{
        alignContent: "center",
        alignItems: "center"
    },
    headerButtonContainer:{
        marginRight: 0,
    },
    headerText:{
        fontSize: 16,
        color: "#E5E5E5",
    },
    infoFeed: {
        marginTop: 30,
        marginLeft: 10,
        alignContent:"center",
        flex: .7
        
        
    },
    lineInfo:{
        flexDirection: "row",
        
        alignContent: "center",
        
        
    },
    infoTextOrange:{
        fontSize: 14,
        color: "#F2994A"
        
    },
    infoTextWhite:{
        fontSize: 14,
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
        fontSize: 14,
        color: "#F2994A"
    },
    infoTextWhiteTraining:{
        fontSize: 14,
        color: "#E5E5E5",
        
       
    },
    perfilElements:{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: .5,
        
    },
    perfilPhoto:{
        marginTop: 30,
       
        
    },
    lineContainer:{
        height: 24,
        borderBottomColor: "#053A41",
        borderBottomWidth: .5,
        
    },
    inputColor:{
        borderRadius: 0,
        borderWidth: 1,
        alignItems: "center",
        borderBottomColor: "#F2994A",
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        color: "#E5E5E5",
        includeFontPadding: true,
        paddingLeft: 3,
        fontSize: 14 ,
        marginBottom: 5,
        marginTop: 5,
        width: 40
    },
    inputLine:{
        flexDirection: "row-reverse",
        alignContent: "center",
        alignItems: "center"
    },
    inputContainer:{
        marginTop: "5%",
        marginRight: "12%",
        marginLeft: "10%"
    },
    inputContainer2:{
        marginTop: "5%",
        marginRight: "10%"
        
    },
    date:{
        marginTop: "5%",
        alignItems: "center",
        alignContent: "center"
    },
    inputContainers:{
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonStyle:{
        marginTop: "10%",
        color: "#F2994A",
    },

})