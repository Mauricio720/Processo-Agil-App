import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DrawerCustom from '../components/DrawerCustom';
import ProcessScreen from '../screens/ProcessScreen';
import SeeProcessScreen from '../screens/ProcessScreen/SeeProcessScreen';
import EventScreen from '../screens/EventScreen';
import SeeEventScreen from '../screens/EventScreen/SeeEventScreen';
import MovimentScreen from '../screens/MovimentScreen';
import SeeMovimentScreen from '../screens/MovimentScreen/SeeMovimentScreen';
import UsersScreen from '../screens/UsersScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import ContactScreen from '../screens/ContactScreen';

const Drawer = createDrawerNavigator();

export default ()=>{
    return (
        <Drawer.Navigator   
            drawerContent={(props)=>(<DrawerCustom {...props}/>)} 
            screenOptions={{
                headerShown:true,
                headerTitle:'',
                headerTintColor: '#fdc970',
                headerStyle:{
                    backgroundColor:'#9d0039',

                },
                headerShadowVisible:false,
            }}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
            <Drawer.Screen name="ProcessScreen" component={ProcessScreen}/>
            <Drawer.Screen name="SeeProcessScreen" component={SeeProcessScreen}/>
            <Drawer.Screen name="EventScreen" component={EventScreen}/>
            <Drawer.Screen name="SeeEventScreen" component={SeeEventScreen}/>
            <Drawer.Screen name="MovimentScreen" component={MovimentScreen}/>
            <Drawer.Screen name="SeeMovimentScreen" component={SeeMovimentScreen}/>
            <Drawer.Screen name="UsersScreen" component={UsersScreen}/>
            <Drawer.Screen name="MyProfileScreen" component={MyProfileScreen}/>
            <Drawer.Screen name="ContactScreen" component={ContactScreen}/>
        </Drawer.Navigator>
    );
}