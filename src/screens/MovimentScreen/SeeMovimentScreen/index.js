import React,{useEffect, useState} from "react";
import {ScrollView,Box,Text, Center, Heading, Pressable} from "native-base";
import { useNavigation,useRoute } from "@react-navigation/core";
import { date_ptBR, convertToDateObject } from '../../../services/DateTime';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useStateValue } from '../../../contexts/StateContext';

export default ()=>{
    const route=useRoute();
    const [movimentInfo,setMovimentInfo]=useState(route.params.movimentInfo);
    const navigation=useNavigation();
    const [context, dispatch] = useStateValue();
    const idUser=context.user.id;

    useEffect(()=>{
        setMovimentInfo(route.params.movimentInfo);
    },[route.params.movimentInfo]);
    

    return (
        <ScrollView bg="white">
            <Pressable position="absolute" top="6" left="3" zIndex={10000}
                onPress={()=>{navigation.navigate('MovimentScreen',{idUser})}}>
                <Icon name="rotate-left" color="#ed0056" size={25}/>
            </Pressable>

            <Box rounded="lg" overflow="hidden">
                <Center>
                    <Heading pl={6} width="95%" color="#bc0042" borderBottomWidth={3} borderColor="#bc0042" m={5} textAlign="center" pb={2}>Informações da Movimentação</Heading>
                </Center>
                <Box>
                    <Center>
                        <Box width="98%" p={2} pb={4}  marginTop="30px" borderColor="#bc0042" borderWidth={3} borderRadius={15}>
                            <Center>
                                <Heading position="absolute" top="-30" pl={1} pr={1} w="55%" height="45px" pt={3} textAlign="center" fontSize="20px" 
                                    bg="#9d0039" color="white" fontWeight="bold" borderRadius={10}>
                                    Informações Básica
                                </Heading>
                            </Center>
                            
                            <Box mt={18}>
                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Processo
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {movimentInfo.processo}
                                    </Text>
                                </Box>

                              <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Data Emissão
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {date_ptBR(convertToDateObject(movimentInfo.data_emissao))}
                                    </Text>
                                </Box>

                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Data Distribuição
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {date_ptBR(convertToDateObject(movimentInfo.data_cadastro))}
                                    </Text>
                                </Box>
                            </Box>
                            
                        </Box>
                    </Center>
                
                    <Box p={2} marginTop="25px">
                       <Box mt={10} p={5} pb={2} flexDirection="row"  min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Tipo
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${movimentInfo.tipo !== ""?movimentInfo.tipo:'Não Informado'}`}
                            </Text>
                            
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
                        </Box>

                        <Box mt={10} p={5} pb={2} flexDirection="row"  min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Sistema
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${movimentInfo.sistema !== ""?movimentInfo.sistema:'Não Informado'}`}
                            </Text>
                            
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
                        </Box>

                        <Box mt={10} p={5} pb={2} flexDirection="row"  min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Texto
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${movimentInfo.texto !== ""?movimentInfo.texto:'Não Informado'}`}
                            </Text>
                            
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )
}