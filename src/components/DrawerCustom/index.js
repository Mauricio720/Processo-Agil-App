import React,{useEffect, useState} from 'react';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
    Box,
    Pressable,
    VStack,
    Text,
    HStack,
    Divider,
    Center,
    Image
} from "native-base";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";
import { useStateValue } from '../../contexts/StateContext';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    const idUser=context.user.id;

    useEffect(()=>{
        changeMenuExternal();
    },[context.menu.menuSelected])
    
    const changeMenuExternal=()=>{
        let menuExternalId=context.menu.menuSelected;
        if(menuExternalId!== null){
            let menusClone=[...menus];
            clearSelectedMenu(menusClone);
            
            let index=menusClone.findIndex((itemMenu)=>{
                if(itemMenu.id===menuExternalId){
                    return true;
                }
            });

            menusClone[index].active=true;
            setMenu(menusClone);
        }
    }

    const [menus,setMenu] = useState([
        { id:0, title: 'Inicio', icon: 'house', component: 'HomeScreen', active: true },
        { id:1, title: 'Processos', icon: 'gavel', component: 'ProcessScreen', active: false },
        { id:2, title: 'Movimentações', icon: 'list', component: 'MovimentScreen', active: false },
        { id:3, title: 'Eventos', icon: 'today', component: 'EventScreen', active: false },
        { id:4, title: 'Meu Perfil', icon: 'person', component: 'MyProfileScreen', active: false },
        { id:5, title: 'Contato', icon: 'contacts', component: 'ContactScreen', active: false },
    ]);

    const logout = async () => {
        await AsyncStorage.removeItem('token');

        navigation.reset({
            index: 1,
            routes: [{ name: 'LoginScreen' }]
        });
    }

    const clearSelectedMenu=(menusClone)=>{
        menusClone.forEach((itemMenu)=>{
            itemMenu.active=false;
        })
    }

    const changeScreen=(item)=>{
        let menusClone=[...menus];
        clearSelectedMenu(menusClone);
        
        let index=menusClone.findIndex((itemMenu)=>{
            if(itemMenu.id===item.id){
                return true;
            }
        });


        menusClone[index].active=true;
        navigation.navigate(item.component,{idUser});
        
        setMenu(menusClone);
    }

    return (
        <Box bg="#bc0042" height="100%">
            <DrawerContentScrollView safeArea>
                <Box bg="white"  m={5}  borderRadius="10px" padding={5}>
                    <Center>
                        <Image source={require('../../assets/images/logo.png')} alt="logo" width="100%" height="100px" resizeMode='contain'/>
                    </Center>
                </Box>

                <VStack bg="#c50047" space="6" my="2" mx="1" mt="45px">
                    <VStack divider={<Divider />} space="4">
                        <VStack space="3">
                            {menus.map((item, index) => (
                                <Pressable bg={item.active?'#fdc970':'transparent'} key={index} px="5" py="3" rounded="md"
                                    onPress={() => {changeScreen(item)}}>
                                    <HStack space="7" alignItems="center">
                                        <Icon name={`${item.icon}`} size={28} color={item.active?'#c50047':'white'} />
                                        <Text fontWeight="bold" color={item.active?'#c50047':'white'}  fontSize={17}>
                                            {item.title}
                                        </Text>
                                    </HStack>
                                </Pressable>
                            ))}
                            
                            <Pressable key={menus.length + 2} px="5" py="3" rounded="md"
                                onPress={() => { logout();}}>
                                <HStack space="7" alignItems="center">
                                    <Icon name="logout" size={28} color="white" />
                                    <Text fontWeight="bold" color="white" fontSize={17}>Sair</Text>
                                </HStack>
                            </Pressable>

                        </VStack>
                    </VStack>
                </VStack>
            </DrawerContentScrollView>
        </Box>
    )
}