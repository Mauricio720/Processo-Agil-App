import React, { useEffect, useState } from "react";
import { ScrollView, Box, Text, Center, Heading, Pressable } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/core";
import { date_ptBR, convertToDateObject } from '../../../services/DateTime';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useStateValue } from '../../../contexts/StateContext';
import PartEvent from '../../../components/PartEvent';

export default () => {
    const route = useRoute();
    const [eventInfo, setEventInfo] = useState(route.params.eventInfo);
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    const idUser=context.user.id;

    useEffect(() => {
        setEventInfo(route.params.eventInfo);
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setEventInfo(route.params.eventInfo);
        });

        return unsubscribe;
    }, [route.params.eventInfo]);

    return (
        <ScrollView bg="white">
             <Pressable position="absolute" top="6" left="5" zIndex={10000}
                onPress={()=>{navigation.navigate('EventScreen',{idUser})}}>
                <Icon name="rotate-left" color="#ed0056" size={25}/>
            </Pressable>

            <Box rounded="lg" overflow="hidden">
                <Heading color="#bc0042" borderBottomWidth={3} borderColor="#bc0042" m={5} textAlign="center" pb={2}>Informações do Evento</Heading>
                <Box>
                    <Center>
                        <Box width="98%" p={2} pb={4}  marginTop="30px" borderColor="#bc0042" borderWidth={3} borderRadius={15}>
                            <Center>
                                <Heading position="absolute" top="-30" pl={1} pr={1} w="55%" height="45px" pt={3} textAlign="center" fontSize="20px" 
                                    bg="#9d0039" color="white" fontWeight="bold" borderRadius={10}>
                                    Datas Eventos
                                </Heading>
                            </Center>

                            <Box mt={18}>
                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Data Cadastro
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {eventInfo.data_cadastro !== null ? date_ptBR(convertToDateObject(eventInfo.data_cadastro)) : 'Não Informado'}
                                    </Text>
                                </Box>

                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Data Inicio
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {eventInfo.data_inicio !== null ? date_ptBR(convertToDateObject(eventInfo.data_inicio)) : 'Não Informado'}
                                    </Text>
                                </Box>

                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Data Fim
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {eventInfo.data_fim !== null ? date_ptBR(convertToDateObject(eventInfo.data_fim)) : 'Não Informado'}
                                    </Text>
                                </Box>

                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Data Finalizado
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {eventInfo.data_finalizado !== null ? date_ptBR(convertToDateObject(eventInfo.data_finalizado)) : 'Não Informado'}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Center>    
                </Box>

                <Box mt={15}>
                    <Center>
                        <Box width="98%" p={2} pb={4}  marginTop="30px" borderColor="#bc0042" borderWidth={3} borderRadius={15}>
                            <Center>
                                <Heading position="absolute" top="-30" pl={1} pr={1} w="55%" height="45px" pt={3} textAlign="center" fontSize="20px" 
                                    bg="#9d0039" color="white" fontWeight="bold" borderRadius={10}>
                                    Processo Referente
                                </Heading>
                            </Center>

                            <Box mt={18}>
                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Numero
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {eventInfo.processo.numero}
                                    </Text>
                                </Box>

                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Numero único
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {eventInfo.processo.numero_unico}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Center>    
                </Box>

               <Box p={2} marginTop="25px">
                    <Box mt={10} p={5} pb={2} flexDirection="row"  min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                            position="absolute" left="5" top="-18" bg="white">
                            Título
                        </Text>
                        <Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                            {`${eventInfo.titulo !== ""?eventInfo.titulo:'Não Informado'}`}
                        </Text>
                        
                        <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                            borderWidth={3} position="absolute" top={2} right={1} px="3" py="1.5" 
                            fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                            !
                        </Text>
                    </Box>

                    <Box mt={10} p={5} pb={2} flexDirection="row"  min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                            position="absolute" left="5" top="-18" bg="white">
                            Status
                        </Text>
                        <Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                            {`${eventInfo.status !== ""?eventInfo.status:'Não Informado'}`}
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
                            Eixo Estratégico
                        </Text>
                        <Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                            {`${eventInfo.eixo_estrategico !== null?eventInfo.eixo_estrategico:'Não Informado'}`}
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
                            Finalizado por
                        </Text>
                        <Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                            {`${eventInfo.finalizado_por !== null ? eventInfo.finalizado_por : 'Não Informado'}`}
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
                            Observações Finais
                        </Text>
                        <Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                            {`${eventInfo.observacoes_finais !== null ? eventInfo.observacoes_finais : 'Não Informado'}`}
                        </Text>
                        
                        <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                            borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                            fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                            !
                        </Text>
                    </Box>

                    {eventInfo.descricao &&
                        <Box mt={10} p={5} pb={2} flexDirection="row"  min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                            <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Descrição
                            </Text>
                            <Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {eventInfo.descricao}
                            </Text>
                            
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
                        </Box>
                    }

                    <Box width="100%" marginTop="40px" borderColor="#bc0042" >
                        <Heading color="#9d0039" borderTopWidth={3} borderBottomWidth={3} borderColor="#9d0039" p={2} m={5} textAlign="center">Participantes</Heading>

                        {eventInfo.participantes.map((participante, index) => (
                            <PartEvent key={index} info={participante}/>
                        ))}
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )
}