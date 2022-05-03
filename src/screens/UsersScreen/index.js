import React,{useState,useEffect} from 'react';
import {Box,Center,FlatList,FormControl,Text,Input,Icon,Ionicons,Spinner,Heading} from "native-base";
import Api from '../../services/Api';

export default ()=>{
    const [userName,setUserName]=useState('');
    const [loading,setLoading]=useState(false);
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        getAllUsers();
    },[userName]);

    const getAllUsers= async ()=>{
        setLoading(true);
        let response=await Api.getUsers(userName);
        setUsers(response.resultado.lista);
        setLoading(false);
    }

    return (
        <Box>
            <Heading m={5} textAlign="center">Usuarios</Heading>  
            <Box>
                <Center>
                    <FormControl width="80%" m={2}>
                        <FormControl.Label>Nome Usuário</FormControl.Label>
                        <Input 
                            value={userName} 
                            fontSize="md"    
                            placeholder='Digite o nome do usuário'
                            onChangeText={(text)=>{setUserName(text)}}
                        />
                    </FormControl>
                </Center>
            </Box>

            <Box>
                <Center>
                    {loading &&
                        <Box mt="180px">
                            <Spinner size="lg" color='darkBlue.800' accessibilityLabel="Loading posts"/>
                        </Box>
                    }

                    {users.length > 0 &&
                        <FlatList
                            mt="25px"
                            data={users} 
                            refreshing={loading}
                            renderItem={({item})=>(
                                <Text>{`${item.value} - ${item.tipo}`}</Text>
                            )}
                            keyExtractor={((item)=>item.id.toString())}
                        />
                    }

                    {users.length === 0 && loading===false &&
                        <Text>Nenhum usuario listado.</Text>
                    }
                </Center>
            </Box>
        </Box>
    )
}