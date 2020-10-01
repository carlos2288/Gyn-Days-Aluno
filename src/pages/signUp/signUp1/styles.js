import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000F14",
    },
    marginArea:{
        marginLeft: 24,
        marginRight: 24,
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 36,
        

    },
    headerText:{
        fontSize: 18,
        color: "#E5E5E5",
    },
    logoImg:{
        height: 34,
        width: 34,
    },
    content:{
        marginTop: 0,
    },
    textInputSignUp:{
        marginTop: 10,
        marginLeft: 8,
        color: '#F2994A',
        fontSize: 16,
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
    inputColorAutoGrow:{
        minHeight: 36,
        maxHeight: 80,
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
    buttonStyle:{
        color: "#F2994A",
    },
})