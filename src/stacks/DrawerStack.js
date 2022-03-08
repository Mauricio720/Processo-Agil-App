import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default ()=>{

    return (
        <Drawer.Navigator   
            screenOptions={{
                headerShown:true,
                headerTitle:'',
                headerStyle:{
                    backgroundColor:'transparent',
                },
                headerShadowVisible:false,
            }}
        >
        <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
        </Drawer.Navigator>
    );
}