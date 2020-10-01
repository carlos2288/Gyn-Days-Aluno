import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';
import styles from './utils/styleutil';


//importing pages ---
import SignUp1 from './pages/signUp/signUp1';
import SignUp2 from './pages/signUp/signUp2';
import Login from './pages/login';
import Profile from './pages/profile/profileProfile';
import TrainingFeed from './pages/profile/profileTrainingFeed';
import AddTraining from './pages/profile/profileAddTraining';
import { Image } from 'react-native';


const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Home(){
    return(
        
        <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="T-Feed" component={TrainingFeed} />
        </AppStack.Navigator>
    );
}

function HomeTab(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}, ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                  return <Image style={{}} source={
                iconName = focused ? require('./assets/icons/iconButton.png')
                  : require('./assets/icons/iconButton.png')
                }  style={styles.buttonImageTab}
                />} else if (route.name === 'Profile') return <Feather name={
                iconName = focused ? 'user' : 'user'
              } size={20} color="#E5E5E5" />
  
              // You can return any component that you like here!
              
              
            },
          })}
          tabBarOptions={{
            activeTintColor: '#F2994A',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#101D28',
            inactiveBackgroundColor:'#011015',
            
          }} >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}


export default function Routes(){
    return(
        
        <NavigationContainer>
            
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="SignUp1" component={SignUp1}/>
                <AppStack.Screen name="SignUp2" component={SignUp2}/>
                <AppStack.Screen name="HomeTab" component={HomeTab}/>
                <AppStack.Screen name="AddTraining" component={AddTraining}/>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}
