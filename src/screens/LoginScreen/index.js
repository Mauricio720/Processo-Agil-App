import React,{useState} from 'react';
import Style from './style';
import {Box,FormControl,Input,Image,Center,Button} from "native-base";
import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import { useNavigation } from "@react-navigation/core";

export default ()=>{
    const [userLogin,setUserLogin]=useState('');
    const [password,setPassword]=useState('');
    const [context,dispatch]=useStateValue();
    const navigation=useNavigation();

    const doLogin=async ()=>{
        if(userLogin && password){
            let response=await Api.doLogin(userLogin,password);
            console.tron.log(response);
   
        }
    }

    return (
        <Box bg='darkBlue.900' alignItems='center' flex="1" safeAreaTop padding={5}>
             <Box width="100%" flex={1}>
                <Center>
                    <Image source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }} alt="Alternate Text" 
                        size="xl" 
                        borderRadius="full"
                    />
                </Center>
            </Box>
            
            <Box width="100%" justifyContent='center' flex={2}>
                <FormControl>
                    <FormControl.Label color='white' fontSize='md'>
                        Usuario
                    </FormControl.Label>
                    <Input bg='dark.300' fontSize="md" color='white'
                        onChangeText={(text)=>{setUserLogin(text)}}    
                    />
                </FormControl>

                <FormControl>
                    <FormControl.Label>
                        Senha
                    </FormControl.Label>
                    <Input bg='dark.300' fontSize="md" color='white'
                        onChangeText={(text)=>{setPassword(text)}}
                    />
                </FormControl>
            </Box>
            
            <Box  width="100%" flex={1}>
                <FormControl marginTop={10}>
                    <Button onPress={doLogin} m={2}>Entrar</Button>
                    <Button variant="ghost" m={2}>Esqueci a senha.</Button>
                </FormControl>
            </Box>
        </Box>
    )
}