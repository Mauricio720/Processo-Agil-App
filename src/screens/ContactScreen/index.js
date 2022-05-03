import React from 'react';
import {ScrollView,Box,Center,Image,Text, Heading, Button} from "native-base";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default ()=>{
    return (
        <ScrollView bg="white">
            <Box width="100%" borderRadius="5px" padding={5} >
                <Center >
                    <Image source={require('../../assets/images/logo.png')} alt="logo" width="70%" height={150} resizeMode='contain'/>
                </Center>
            </Box>

            <Center>
                <Heading w="90%" p={2} mt="20px" borderTopWidth={2} borderBottomWidth={3} borderColor="secondary.700" color="secondary.700" textAlign="center">Entre em contato</Heading>
            </Center>

            <Box p={2} mt="55px">
                <Center>
                    <Button p={1} m={2} width="90%" height="45px" colorScheme="primary" borderRadius="15px" 
                        endIcon={<Icon name="instagram" size={23} color="white"/>}>
                        <Text color='white' fontSize={16}>Intagram</Text>
                    </Button>

                    <Button p={1} m={2} width="90%" height="45px" borderRadius="15px"  bg="#008000" color="white"
                        endIcon={<Icon name="whatsapp" size={23} color="white"/>}>
                        <Text color='white' fontSize={16}>Whatsapp</Text>
                    </Button>

                    <Button p={1} m={2} width="90%" height="45px" colorScheme="secondary" borderRadius="15px"
                        endIcon={<Icon name="envelope" size={23} color="white"/>}>
                        <Text color='white' fontSize={16}>Email</Text>
                    </Button>

                    <Button p={1} m={2} width="90%" height="45px" bg="darkBlue.700" borderRadius="15px"
                        endIcon={<Icon name="facebook" size={23} color="white"/>}>
                        <Text color='white' fontSize={16}>Facebook</Text>
                    </Button>
                </Center>
            </Box>
        </ScrollView>
    )
}