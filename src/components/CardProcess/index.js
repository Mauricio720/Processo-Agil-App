import React from 'react';
import { Box, Pressable ,Text, Center, Heading,Button} from "native-base";
import { useNavigation } from "@react-navigation/core";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { useStateValue } from '../../contexts/StateContext';

export default (props) => {
	const info = props.info;
	const navigation = useNavigation();
	const [context,dispatch]=useStateValue();
    
	const changeScreenMoviment=()=>{
		dispatch({type:'SET_SELECTED_MENU',payload:{menuSelected:2}});
		navigation.navigate('MovimentScreen',{idProcess:info.id})
	}

	return (
		<Pressable marginTop={10} onPress={()=>{navigation.navigate('SeeProcessScreen',{processInfo:info})}}>
			<Center>
				<Box bg="white" overflow="hidden" width="95%" height='300px' pb={5} 
					borderRadius={15} borderColor="#bc0042" borderWidth="3">
					<Heading height="45px" pt={1} textAlign="center" fontSize="24px" 
						bg="#9d0039" color="white" fontWeight="bold">
						{info.tipo}
					</Heading>

					<Box position="absolute" right="0" top="0" px="3" py="1.5">
                        <Icon name="gavel" color="white" size={25}/>
                    </Box>

					<Box flex={2} mt={5} flexDirection="column" p={5} mb={10}>
						<Box p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" position="absolute" left="5" top="-18" bg="white">Numero</Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#9d0039" >{info.numero}</Text>
						</Box>

						<Box mt={8} p={5} pb={6} flexDirection="column" height={15} borderRadius="15px" borderColor="#9d0039" borderWidth={3}>
							<Text pl={3} pr={3} fontWeight="bold" color="#9d0039" fontSize="20px" position="absolute" left="5" top="-18" bg="white">Numero Único</Text>
							<Text fontWeight="bold" mt="-10px" height={10} fontSize="18px" color="#9d0039" >{info.numero}</Text>
						</Box>
					</Box>

					<Box flex={1}>
						<Center>
							<Button p={2} m={1} mt={5} width="55%" height="40px" bg="#9d0039" borderRadius="15px" 
								endIcon={<Icon name="list" size={24} color="white"/>}
								onPress={() => {changeScreenMoviment()}}>
								<Text color='white' fontWeight="bold" fontSize={16}>Ver Movimentações</Text>
							</Button>
						</Center>
					</Box>
				</Box>
			</Center>
		</Pressable>
	)
}