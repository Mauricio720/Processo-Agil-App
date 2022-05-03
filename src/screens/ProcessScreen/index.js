import React,{useEffect,useState} from 'react';
import {Box,Center,FlatList,FormControl,Text,Input,Spinner,Heading} from "native-base";
import Api from '../../services/Api';
import DateTimePicker from '@react-native-community/datetimepicker';
import {date_default,convertDate_ptBR} from '../../services/DateTime';
import Alert from '../../components/Alert';
import CardProcess from '../../components/CardProcess';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import PaginationContainer from '../../components/PaginationContainer';
import { useRoute } from "@react-navigation/core";

export default ()=>{
    const route=useRoute();
    const idUser=route.params.idUser !== undefined?route.params.idUser:'';
    const [process,setProcess]=useState([]);
    const [showDateFirst,setShowDateFirst]=useState(false);
    const [dateFirst,setDateFirst]=useState('');
    const [showDateFinal,setShowDateFinal]=useState(false);
    const [dateFinal,setDateFinal]=useState('');
    const [loading,setLoading]=useState(false);
    const [showAlert,setShowAlert]=useState(false);
    const [error,setError]=useState('');
    const [page,setPageNumber]=useState(1);
    
    useEffect(()=>{
        getAllProcess();
    },[dateFirst,dateFinal,page]);
    
    const getAllProcess= async ()=>{
        setLoading(true);
        let response=await Api.getProcess(filterObject());

        if(response.status!=="erro"){
            setProcess(response.processos);
        }else{
            setShowAlert(true);
            setError(response.erro);
            setProcess([]);
        }        
        
        setLoading(false);
    }

    const filterObject=()=>{
        let objectFilter={};

        if(dateFirst){
            objectFilter["datainicial"]=date_default(dateFirst);
        }
        
        if(dateFinal){
            objectFilter["datafinal"]=date_default(dateFinal);
        }

        if(idUser!==''){
            objectFilter["parte"]=idUser;
        }
        
        return objectFilter;
    }

    const setFirstDateCalendar=(event, selectedDate)=>{
        const currentDate = selectedDate || dateFirst;
        setShowDateFirst(false);
        if(currentDate !== ''){
            setDateFirst(currentDate);
        }

    }

    const setFinalDateCalendar=(event, selectedDate)=>{
        const currentDate = selectedDate || dateFinal;
        setShowDateFinal(false);
        setDateFinal(currentDate);
    }

    return (
        <Box bg="white" flex={1}>
            <Heading color="#9d0039" borderTopWidth={3} borderBottomWidth={3} borderColor="#9d0039" p={2} m={5} textAlign="center">Processos</Heading>
            <Box>
                <Center>
                    {showAlert &&
                        <Alert 
                            width="90%"
                            showAlert={showAlert}
                            setShowAlert={setShowAlert}
                            alertTitle={error}
                        />
                    }
                    <FormControl width="80%" m={2}>
                        <Input 
                            editable={false} 
                            value={dateFirst !== ''?convertDate_ptBR(date_default(dateFirst)):''} 
                            InputRightElement={
                                <Box mr={2}>
                                    <Icon onPress={()=>{setShowDateFirst(true)}} name="event" size={30} color="#9d0039"/>
                                </Box>
                            }
                            fontSize="20px"    
                            placeholder='Selecione a data inicial'
                            placeholderTextColor="#9d0039"
                            borderColor="#9d0039"
                            color="#9d0039"
                            borderRadius="15px"
                            borderWidth={3}
                        />
                        
                        {showDateFirst && (
                            <DateTimePicker
                                testID="processFilterDateFirst"
                                value={dateFirst===''?new Date():dateFirst}
                                mode={'date'}
                                is24Hour={true}
                                display="default"
                                onChange={setFirstDateCalendar}
                            />
                        )}
                    </FormControl>

                    <FormControl width="80%" m={2}>
                        <Input 
                            editable={false} 
                            value={dateFinal !== ''?convertDate_ptBR(date_default(dateFinal)):dateFinal} 
                            InputRightElement={
                                <Box mr={2}>
                                    <Icon onPress={()=>{setShowDateFinal(true)}} name="event" size={30} color="#9d0039"/>
                                </Box>
                            }
                            fontSize="20px"
                            placeholder='Selecione a data final'  
                            placeholderTextColor="#9d0039"  
                            borderColor="#9d0039"
                            color="#9d0039"
                            borderRadius="15px"
                            borderWidth={3}
                        />
                        
                        {showDateFinal && (
                            <DateTimePicker
                                testID="processFilterDateFinal"
                                value={dateFinal===''?new Date():dateFinal}
                                mode={'date'}
                                is24Hour={true}
                                display="default"
                                onChange={setFinalDateCalendar}
                            />
                        )}
                    </FormControl>
                </Center>
            </Box>

            <Box>
                <Center>
                    {process.length > 0 && !loading &&
                        <FlatList
                            bg="white"
                            w="100%"
                            height="350px"
                            mt="5px"
                            data={process} 
                            refreshing={loading}
                            renderItem={({item})=>(
                                <CardProcess info={item}/>  
                            )}
                            keyExtractor={((item)=>item.id.toString())}
                        />
                        
                    }

                    {loading &&
                        <Box mt="180px">
                            <Spinner size="lg" color='#9d0039' accessibilityLabel="Carregando Processos"/>
                        </Box>
                    }

                    {process.length === 0 && loading===false &&
                        <Text color="#9d0039" fontWeight='bold' mt="135px" borderColor="#9d0039" borderBottomWidth={3} fontSize="20px">Nenhum processo listado.</Text>
                    }
                </Center>
            </Box>
            
            {!loading && process.length > 0 &&
                <Center>
                    <PaginationContainer loading={loading} selectedPage={page} setPageNumber={setPageNumber} totalItems={4000} itemsPerPage={50}/>
                </Center>
            }
        </Box>
    )
}