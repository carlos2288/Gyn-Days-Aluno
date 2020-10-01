import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000F14'
    },
    components: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    logo:{

        flex: 1,
        alignItems: 'center',
        marginTop: 75,
        justifyContent: 'center'
        
    },
    loginInputsContainer:{
        marginBottom:100,
        marginLeft: 24,
        marginRight:24,

    },
    inputColor:{
        height: 36,
        borderRadius: 0,
        borderWidth: 1,
        alignItems: "center",
        borderBottomColor: "#F2994A",
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        color: "#E5E5E5",
        includeFontPadding: true,
        paddingLeft: 15,
        fontSize: 18,
        marginBottom: 10
    },
    inputColorPassword:{
        height: 36,
        borderRadius: 0,
        borderWidth: 1,
        alignItems: "center",
        borderBottomColor: "#F2994A",
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        color: "#E5E5E5",
        includeFontPadding: true,
        paddingLeft: 15,
        fontSize: 18,
        marginBottom: 15
    },
    textInputLogin:{
        marginLeft: 8,
        color: '#F2994A',
        fontSize: 16,
    },
    buttonStyle:{
        
        backgroundColor: 'transparent',
        color: "#F2994A",
    },
    textButton:{
        marginLeft: 8,
        color: '#E5E5E5',
        fontSize: 16,
        marginTop: 15,
    },
    buttonSignUp:{
        flexDirection: "row",
        marginRight: 80,
    }

})