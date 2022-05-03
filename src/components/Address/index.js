import React from 'react';
import { Box, Text, Center} from "native-base";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default (props) => {
	const info = props.info;
	const number=props.number;

    return (
		<Box marginTop={30}>
			<Center>
				<Box bg="white" overflow="hidden" width="100%"  
					borderRadius={15} borderColor="#bc0042" borderWidth="3">
					
                    <Box flexDirection="row" w="100%" bg="#ed0056" >
                        <Box w="90%">
                            <Text p={3} fontSize="18px" maxWidth="98%" 
                                color="white" fontWeight="bold">
                                {`Endereço - ${number}`}
                            </Text>
                        </Box>
                        
                        <Box w="10%" alignItems="center" justifyContent="center">
                            <Icon name="location-arrow" color="white" size={25}/>
                        </Box>
                    </Box>

					<Box flex={2} mt={2} flexDirection="column" mb={2}>
						<Box m={2} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#ed0056" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#ed0056" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Cep
                            </Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#ed0056" >
                                {info.cep}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#ed0056" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={1} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#ed0056" textAlign="center">
                                !
                            </Text>
						</Box>
                    </Box>

                    <Box flex={2} mt={2} flexDirection="column" mb={2}>
						<Box m={2} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#ed0056" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#ed0056" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Logradouro
                            </Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#ed0056" >
                                {info.logradouro}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#ed0056" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={1} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#ed0056" textAlign="center">
                                !
                            </Text>
						</Box>
                    </Box>

                    <Box flex={2} mt={2} flexDirection="column" mb={2}>
						<Box m={2} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#ed0056" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#ed0056" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Logradouro - Tipo
                            </Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#ed0056" >
                                {info.tipo}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#ed0056" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={1} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#ed0056" textAlign="center">
                                !
                            </Text>
						</Box>
                    </Box>

                    <Box flex={2} mt={2} flexDirection="column" mb={2}>
						<Box m={2} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#ed0056" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#ed0056" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Numero
                            </Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#ed0056" >
                                {info.numero}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#ed0056" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={1} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#ed0056" textAlign="center">
                                !
                            </Text>
						</Box>
                    </Box>

                    <Box flex={2} mt={2} flexDirection="column" mb={2}>
						<Box m={2} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#ed0056" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#ed0056" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Bairro
                            </Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#ed0056" >
                                {info.bairro}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#ed0056" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={1} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#ed0056" textAlign="center">
                                !
                            </Text>
						</Box>
                    </Box>

                    <Box flex={2} mt={2} flexDirection="column" mb={2}>
						<Box m={2} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#ed0056" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#ed0056" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Cidade
                            </Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#ed0056" >
                                {info.cidade}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#ed0056" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={1} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#ed0056" textAlign="center">
                                !
                            </Text>
						</Box>
                    </Box>

                    <Box flex={2} mt={2} flexDirection="column" mb={2}>
						<Box m={2} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#ed0056" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#ed0056" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Estado
                            </Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#ed0056" >
                                {info.cidade}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#ed0056" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={1} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#ed0056" textAlign="center">
                                !
                            </Text>
						</Box>
                    </Box>
                </Box>
			</Center>
		</Box>
	)
}