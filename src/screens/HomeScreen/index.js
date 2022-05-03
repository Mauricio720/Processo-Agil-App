import React, { useState,useEffect } from 'react';
import {ScrollView,Box,Center,Image,Text, Heading, Button} from "native-base";
import { useStateValue } from '../../contexts/StateContext';
import { useNavigation } from "@react-navigation/core";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default ()=>{
    const navigation=useNavigation();
    const [context,dispatch]=useStateValue();
    const user=context.user.user;
    const idUser=context.user.id;
    
    const changeScreen=(menuId)=>{
        dispatch({type:'SET_SELECTED_MENU',payload:{menuSelected:menuId}});
        if(menuId===1){
            navigation.navigate('ProcessScreen',{idUser})
        }

        if(menuId===2){
            navigation.navigate('MovimentScreen',{idUser})
        }

        if(menuId===3){
            navigation.navigate('EventScreen',{idUser})
        }
    }

    return (
        <ScrollView bg="white">
            <Box width="100%" borderRadius="5px" padding={5} >
                <Center >
                    <Image source={require('../../assets/images/logo.png')} alt="logo" width="70%" height={150} resizeMode='contain'/>
                </Center>
            </Box>
            
            <Center>
                <Heading w="90%" p={2} mt="20px" borderTopWidth={2} borderBottomWidth={3} borderColor="secondary.700" color="secondary.700" textAlign="center">Bem Vindo, {user.nome}</Heading>
            </Center>

            <Box p={2} mt="55px">
                <Center>
                    <Button p={1} m={2} width="90%" height="45px" colorScheme="primary" borderRadius="15px" 
                        endIcon={<Icon name="gavel" size={28} color="white"/>}
                        onPress={() => {changeScreen(1)}}>
                        <Text color='white' fontSize={16}>Processos</Text>
                    </Button>

                    <Button p={1} m={2} width="90%" height="45px" borderRadius="15px"  bg="darkBlue.700" color="white"
                        endIcon={<Icon name="list" size={28} color="white"/>}
                        onPress={() => {changeScreen(2)}}>
                        <Text color='white' fontSize={16}>Movimentações</Text>
                    </Button>

                    <Button p={1} m={2} width="90%" height="45px" colorScheme="secondary" borderRadius="15px"
                        endIcon={<Icon name="event" size={28} color="white"/>}
                        onPress={() => {changeScreen(3)}}>
                        <Text color='white' fontSize={16}>Eventos</Text>
                    </Button>
                </Center>
            </Box>
        </ScrollView>
    )
}