import React from 'react';
import {ScrollView,Box,Text,Center,Avatar,Heading, FormControl} from "native-base";
import { useStateValue } from '../../contexts/StateContext';
import { useNavigation } from "@react-navigation/core";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Address from '../../components/Address';

export default ()=>{
    const [context,dispatch]=useStateValue();
    const user=context.user.user;
    
    return (
        <ScrollView bg="white">
            <Box>
                <Box>
                    <Box height="280px" bg="#c50047" >
                        <Center>
                            <Heading color="white" m={5} textAlign="center">Meu Perfil</Heading>

                            <Box w="325px" min-height="250px" marginTop={70} bg="white" pb={5}
                                borderRadius="15px" shadow={2} position="absolute" top="30px">
                                
                                <Avatar bg="#c50047" mt={2} alignSelf="center" size="2xl" source={require('../../assets/images/account.png')}></Avatar>
                                
                                <Center>
                                    <Text p={1} pl={2} pr={2} borderRadius="25px" color="#9d0039" fontWeight="bold" minWidth="100px" mt="15px" textAlign="center" fontSize="22px">{user.nome}</Text>
                                    <Text p={1} pl={2} pr={2} borderRadius="25px" color="#9d0039" fontWeight="bold" minWidth="100px" mt="5px" textAlign="center" fontSize="22px">{`Tipo : ${user.tipo}`}</Text>
                                </Center>
                            </Box>
                        </Center>
                    </Box>

                    <Box p={5} mt="115px">           
                        <Box>
                            <Text color="#9d0039" fontWeight="bold" fontSize="20px">Status</Text>
                            <FormControl borderWidth={3} borderColor="#9d0039" borderRadius="25px" p={2} mt={2} flexDirection="row">
                                <Icon name="error" size={30} color="#9d0039"/>
                                <Text mr="15px" borderWidth={0} color="#9d0039" flex={2} textAlign="center" fontSize="20px"> 
                                    {user.status}
                                </Text>
                            </FormControl>
                        </Box>  

                        <Box mt="25px">
                            <Text fontWeight="bold" color="#9d0039" fontSize="20px">Cpf/Cnpj</Text>
                            <FormControl borderWidth={3} borderColor="#9d0039"  borderRadius="25px" p={2} mt={2} flexDirection='row'>
                                <Icon name="fingerprint" size={30} color="#9d0039"/>
                                <Text mr="15px" borderWidth={0} color="#9d0039" flex={2} textAlign="center" fontSize="20px">
                                    {user.cpfCnpj !== "" ? user.cpfCnpj:'Não Informado'}  
                                 </Text>
                            </FormControl>
                        </Box>  

                        <Box mt="25px">
                            <Text fontWeight="bold" color="#9d0039" fontSize="20px">Identidade</Text>
                            <FormControl borderWidth={3} borderColor="#9d0039"  borderRadius="25px" p={2} mt={2} flexDirection='row'>
                                <Icon name="fingerprint" size={30} color="#9d0039"/>
                                <Text mr="15px" borderWidth={0} color="#9d0039" flex={2} textAlign="center" fontSize="20px">
                                    {user.identidade !== "" ? 
                                        `Número: ${user.identidade.numero}\nOrgão: ${user.identidade.orgao}`
                                        :
                                        'Não Informado'}  
                                 </Text>
                            </FormControl>
                        </Box>  

                        {user.tipo==='PJ' &&
                            <Box mt="25px">
                                <Text color="#9d0039" fontSize="20px">Nome Fantasia</Text>
                                <FormControl borderWidth={3} borderColor="#9d0039" borderRadius="25px" p={2} mt={2} flexDirection='row' >
                                    <Icon name="badge" size={30} color="#9d0039"/>
                                    <Text mr="15px" borderWidth={0} color="#9d0039" flex={2} textAlign="center" fontSize="20px">
                                        {user.nomeFantasia !== "" ? user.nomeFantasia:'Não Informado'}  
                                    </Text>
                                </FormControl>
                            </Box> 
                        }
                        
                        {user.tipo==='PF' &&
                            <Box mt="25px">
                                <Text color="#9d0039" fontSize="20px">Sexo</Text>
                                <FormControl borderWidth={3} borderColor="#9d0039"  borderRadius="20px" p={2} mt={2} flexDirection='row' >
                                    <Icon name="wc" size={30} color="#9d0039"/>
                                    <Text mr="15px" borderWidth={0} color="#9d0039" flex={2} textAlign="center" fontSize="20px">
                                        {user.sexo !== "" ? user.sexo:'Não Informado'}  
                                    </Text>
                                </FormControl>
                            </Box> 
                        }
                        
                        {user.tipo==='PF' &&
                            <Box mt="25px">
                                <Text color="#9d0039" fontSize="20px">Estado Cívil</Text>
                                <FormControl borderWidth={3} borderColor="#9d0039" borderRadius="25px" p={2} mt={2} flexDirection='row'  >
                                    <Icon name="favorite" size={30} color="#9d0039"/>
                                    <Text mr="15px" borderWidth={0} color="#9d0039" borderColor="#9d0039"
                                        flex={2} textAlign="center" fontSize="20px">
                                        {user.estadoCivil !== "Vazio" ? user.estadoCivil:'Não Informado'}  
                                    </Text>
                                </FormControl>
                            </Box> 
                        }

                        {user.enderecos.length > 0 &&
                            <Box mt={35} flex={1}>
                                <Heading p={3} borderRadius={15} fontSize="18px" bg="#ed0056"
                                    color="white" fontWeight="bold" textAlign="center">
                                    Endereços
                                </Heading>

                                {user.enderecos.map((endereco,index)=>(
                                    <Address key={index} info={endereco} number={index+1}/>
                                ))}
                            </Box>
                        }
               
                        {user.contatos.length > 0 &&
                            <Box mt={35} flex={1}>
                                <Heading p={3} borderRadius={15} fontSize="18px" bg="#ed0056"
                                    color="white" fontWeight="bold" textAlign="center">
                                    Contatos
                                </Heading>

                                {user.contatos.map((contato,index)=>(
                                    <Box key={index} flex={2} mt={2} flexDirection="column" mb={2}>
                                        <Box mt={4} m={2} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#ed0056" borderWidth={3}>
                                            <Text pl={3} pr={3} fontWeight="bold" color="#ed0056" fontSize="20px" 
                                                position="absolute" left="5" top="-18" bg="white">
                                                {contato.categoria}
                                            </Text>
                                            <Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#ed0056" >
                                                {contato.dado}
                                            </Text>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        }
                        {user.tipo==='PJ' &&
                            <Box mt="25px">
                                <Text color="#9d0039" fontSize="20px">Situação</Text>
                                <FormControl borderWidth={3} borderColor="#9d0039" borderRadius="25px" p={2} mt={2} flexDirection='row' >
                                    <Icon name="help" size={30} color="#9d0039"/>
                                    <Text color="#9d0039" mr="15px" flex={2} textAlign="center" fontSize="20px">
                                        {user.situacao !== "" ? user.situacao:'Não Informado'}  
                                    </Text>
                                </FormControl>
                            </Box>
                        }

                        {user.tipo==='PJ' &&
                            <Box mt="25px">
                                <Text color="#9d0039" fontSize="20px" fontWeight="bold">Atuação</Text>
                                <FormControl borderWidth={3} borderColor="#9d0039" borderRadius="25px" p={2}  mt={2} flexDirection='row' >
                                    <Icon name="work" size={30} color="#9d0039"/>
                                    <Text mr="15px" borderWidth={0} color="#9d0039" flex={2} textAlign="center" fontSize="20px">
                                        {user.atuacao !== "" ? user.atuacao:'Não Informado'}  
                                    </Text>
                                </FormControl>
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )
    
}