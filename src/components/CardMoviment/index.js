import React from 'react';
import { Box, Text, Center, Heading,Pressable} from "native-base";
import { date_ptBR, convertToDateObject } from '../../services/DateTime';
import { useNavigation } from "@react-navigation/core";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default (props) => {
	const info = props.info;
	const navigation = useNavigation();

	return (
		<Pressable marginTop={20} onPress={()=>navigation.navigate('SeeMovimentScreen',{movimentInfo:info})}>
			<Center>
				<Box bg="white" overflow="hidden" width="95%" height='320px' pb={5} 
					borderRadius={15} borderColor="#bc0042" borderWidth="3">
					<Heading height="45px" pt={1} textAlign="center" fontSize="24px" 
						bg="#9d0039" color="white" fontWeight="bold">
						{info.tipo}
					</Heading>

					<Box position="absolute" right="0" top="0" px="3" py="1.5">
                        <Icon name="list" color="white" size={30}/>
                    </Box>

					<Box flex={2} mt={5} flexDirection="column" p={5} mb={10}>
						<Box p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" position="absolute" left="5" top="-18" bg="white">Numero</Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#9d0039" >{info.processo}</Text>
						</Box>

						<Box mt={8} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" position="absolute" left="5" top="-18" bg="white">Data Cadastro</Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#9d0039" >{date_ptBR(convertToDateObject(info.data_cadastro))}</Text>
						</Box>

						<Box mt={8} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" position="absolute" left="5" top="-18" bg="white">Data Emissão</Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#9d0039" >{date_ptBR(convertToDateObject(info.data_emissao))}</Text>
						</Box>
					</Box>
				</Box>
			</Center>
		</Pressable>
	)
}