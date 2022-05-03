import React, { useEffect, useState } from "react";
import { ScrollView, Box, Text, Heading, Center,Pressable } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/core";
import { date_ptBR, convertToDateObject } from '../../../services/DateTime';
import PartProcess from "../../../components/PartProcess";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default () => {
    const route = useRoute();
    const [processInfo, setProcessInfo] = useState(route.params.processInfo);
    const navigation = useNavigation();

    useEffect(() => {
        setProcessInfo(route.params.processInfo);
    }, [route.params.processInfo]);

    return (
        <ScrollView bg="white">
             <Pressable position="absolute" top="6" left="3" zIndex={10000}
                onPress={()=>{navigation.navigate('ProcessScreen',{})}}>
                <Icon name="rotate-left" color="#ed0056" size={25}/>
            </Pressable>

            <Box rounded="lg" overflow="hidden">
                <Heading color="#bc0042" borderBottomWidth={3} borderColor="#bc0042" m={5} textAlign="center" pb={2}>Informações do Processo</Heading>
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
                                            Número
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {processInfo.numero}
                                    </Text>
                                </Box>

                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Número único
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {processInfo.numero_unico}
                                    </Text>
                                </Box>

                                <Box mt={5} pb={3} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
                                    <Box position="absolute" top={-15} w="100%" justifyContent="center" alignItems="center">
                                        <Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                            bg="white" textAlign="center">
                                            Data Cadastro
                                        </Text>
                                    </Box>
                                    <Text mt={2} pt={1} textAlign="center" fontWeight="bold"  min-height={10} fontSize="20px" color="#9d0039" >
                                        {date_ptBR(convertToDateObject(processInfo.data_cadastro))}
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
                                        {date_ptBR(convertToDateObject(processInfo.data_distribuicao))}
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
                                {`${processInfo.tipo !== ""?processInfo.tipo:'Não Informado'}`}
                            </Text>
                            
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
                        </Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Tribunal
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${processInfo.tribunal !== ""?processInfo.tribunal:'Não Informado'}`}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Sistema
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${processInfo.sistema !== ""?processInfo.sistema:'Não Informado'}`}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Classe
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${processInfo.classe !== ""?processInfo.classe:'Não Informado'}`}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>
                        
                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Assunto
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${processInfo.assunto !== null?processInfo.assunto:'Não Informado'}`}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Vara
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${processInfo.vara !== ""?processInfo.vara:'Não Informado'}`}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Valor Causa
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${processInfo.valor_causa !== ""?processInfo.valor_causa:'Não Informado'}`}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Valor Sugerido
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${processInfo.valor_sugerido !== "" && processInfo.valor_sugerido !== null?processInfo.valor_sugerido:'Não Informado'}`}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Valor Final
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {processInfo.valor_final !== null ? processInfo.valor_final : 'Não Informado'}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Status
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${processInfo.status !== ""?processInfo.status:'Não Informado'}`}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Objeto
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {processInfo.objeto !== null ? processInfo.objeto : 'Não Informado'}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Risco
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {`${processInfo.risco !== ""?processInfo.risco:'Não Informado'}`}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box mt={10} p={5} pb={2} flexDirection="column" min-height={10} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Status Interno
                            </Text>
							<Text pt={1} fontWeight="bold" mt="-10px" min-height={10} fontSize="20px" color="#9d0039" >
                                {processInfo.status_interno !== null ? processInfo.status_interno : 'Não Informado'}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={2} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>

                        <Box width="100%" marginTop="40px" borderColor="#bc0042" >
                            <Heading color="#9d0039" borderTopWidth={3} borderBottomWidth={3} borderColor="#9d0039" p={2} m={5} textAlign="center">Partes Envolvidas</Heading>

                            {processInfo.partes.map((parte, index) => (
                                <PartProcess key={index} info={parte}/>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )

}