import React,{useState} from 'react';
import {Box,FormControl,Input,Image,Center,Button, ScrollView,Spinner,Text} from "native-base";
import { useStateValue } from '../../contexts/StateContext';
import Api from '../../services/Api';
import { useNavigation } from "@react-navigation/core";
import Style from './style';
import Alert from '../../components/Alert';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default ()=>{
    const [userLogin,setUserLogin]=useState('');
    const [showAlert,setShowAlert]=useState(false);
    const [password,setPassword]=useState('');
    const [context,dispatch]=useStateValue();
    const navigation=useNavigation();
    const [loading,setLoading]=useState(false);

    const doLogin=async ()=>{
        if(userLogin){
            setLoading(true);
            let response=await Api.getUsers(userLogin);
            //let id=findUsers(response);
            let id="C9101F2B-AF44-4045-8215-0031A799A5CA";
            if(id !== ''){
                response=await Api.getProfile(id);
                
                if(response){
                    dispatch({type:'SET_ID',payload:{id}});
                    dispatch({type:'SET_TOKEN',payload:{token:id}});
                    dispatch({type:'SET_USER',payload:{user:response}});
                    
                    navigation.reset({
                        index:1,
                        routes:[{name:'DrawerStack'}]
                    });
                }else{
                    setLoading(false);
                }
            }else{
                setShowAlert(true);
                setLoading(false);
            }
        }
    }

    const findUsers=(users)=>{
        let id='';

        users.resultado.lista.forEach((item)=>{
            if(userLogin===item.value){
                id=item.id;
                dispatch({type:'SET_TOKEN',payload:{token:item.id}});
            }
        });

        return id;
    }

    return (
        <ScrollView bg='#bc0042'>
            <Box m={2} alignItems='center' safeAreaTop>
                {showAlert &&
                    <Alert 
                        showAlert={showAlert}
                        setShowAlert={setShowAlert}
                        alertTitle="Usuario ou Senha estão incorretos"
                    />
                }
                
                <Box bg="white" width="80%"  m={5}  borderRadius="10px" padding={5}>
                    <Center>
                        <Image source={require('../../assets/images/logo.png')} alt="logo" width="100%" height="100px" resizeMode='contain'/>
                    </Center>
                </Box>
                
                <Box width="100%" bg="#af0042" p="25px" borderRadius="15px" height="300px" justifyContent='center' mt="60px">
                    <FormControl  mb="25px">
                        <Style.Label>Usuario</Style.Label>
                        <Input focusable={true} color="white" fontSize="lg" borderWidth={0} borderBottomWidth={2} borderColor="white" 
                            placeholderTextColor='white' placeholder='Digite seu usuário'
                            InputLeftElement={
                                <Box ml={1} mr={2}>
                                    <Icon name="user" size={25} color="white" />
                                </Box>
                            }
                            onChangeText={(text)=>{setUserLogin(text)}}    
                        />
                    </FormControl>

                    <FormControl mt="25px">
                        <Style.Label>Senha</Style.Label>
                       <Input fontSize="20px" borderColor="white" borderWidth={0} borderBottomWidth={2} 
                            placeholderTextColor='white' placeholder='Digite sua senha'
                            InputLeftElement={
                                <Box ml={1} mr={2}>
                                    <Icon name="lock" size={25} color="white"/>
                                </Box>
                            }
                            onChangeText={(text)=>{setPassword(text)}}
                        />
                    </FormControl>
                </Box>
                
                <Box width="100%" padding={5}>
                    <FormControl marginTop={10}>
                        <Button 
                            backgroundColor="white"
                            borderRadius="5px"
                            
                            onPress={doLogin} 
                            m={2}
                            endIcon={
                                loading &&
                                    <Spinner color="#9d0039"/>
                            }
                        >
                            <Text color="#9d0039" fontWeight='bold' fontSize={18}>Entrar</Text>
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </ScrollView>
    )
}