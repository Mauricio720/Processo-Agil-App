import React from 'react';
import { Box, Text, Center} from "native-base";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default (props) => {
	const info = props.info;
	
    return (
		<Box marginTop={30}>
			<Center>
				<Box bg="white" overflow="hidden" width="100%"  
					borderRadius={15} borderColor="#bc0042" borderWidth="3">
					
                    <Box flexDirection="row" w="100%" bg="#9d0039" >
                        <Box w="90%">
                            <Text p={3} fontSize="18px" maxWidth="98%" 
                                color="white" fontWeight="bold">
                                {info.usuario}
                            </Text>
                        </Box>
                        
                        <Box w="10%" alignItems="center" justifyContent="center">
                            <Icon name="person" color="white" size={30}/>
                        </Box>
                    </Box>

					<Box flex={2} mt={5} flexDirection="column" mb={8}>
						<Box m={2} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" 
                                position="absolute" left="5" top="-18" bg="white">
                                Responsável
                            </Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#9d0039" >
                                {info.responsavel?'Sim':'Não'}
                            </Text>
                            <Text w="35px" height="35px" borderColor="#9d0039" borderRadius="35px" lineHeight="25px"
                                borderWidth={3} position="absolute" top={1} right={2} px="3" py="1.5" 
                                fontWeight="bold" fontSize={24} color="#9d0039" textAlign="center">
                                !
                            </Text>
						</Box>
                    </Box>
                </Box>
			</Center>
		</Box>
	)
}