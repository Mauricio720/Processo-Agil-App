import React,{useEffect,useState} from 'react';
import {Box,Center,FlatList,FormControl,Text,Input,Spinner,Heading} from "native-base";
import Api from '../../services/Api';
import DateTimePicker from '@react-native-community/datetimepicker';
import {date_default,convertDate_ptBR} from '../../services/DateTime';
import Alert from '../../components/Alert';
import { useRoute } from "@react-navigation/core";
import CardMoviment from '../../components/CardMoviment';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default ()=>{
    const route=useRoute();
    const idUser=route.params.idUser !== undefined?route.params.idUser:'';
    const idProcess=route.params.idProcess !== undefined?route.params.idProcess:'';
    
    const [moviments,setMoviments]=useState([]);
    const [showDateFirst,setShowDateFirst]=useState(false);
    const [dateFirst,setDateFirst]=useState('');
    const [showDateFinal,setShowDateFinal]=useState(false);
    const [dateFinal,setDateFinal]=useState('');
    const [loading,setLoading]=useState(false);
    const [showAlert,setShowAlert]=useState(false);
    const [error,setError]=useState('');
    
    useEffect(()=>{
        getAllMoviments();
    },[route.params.idUser,route.params.idProcess,dateFirst,dateFinal])

    
    const getAllMoviments= async ()=>{
        setLoading(true);
        
        let response=await Api.getMoviments(filterObject());    
        
        if(response.status!=="erro"){
            setMoviments(response.publicacoes);
        }else{
            setShowAlert(true);
            setError(response.erro);
            setMoviments([]);
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

        if(idProcess){
            objectFilter['processo']=idProcess;
        }

        return objectFilter;
    }

    const setFirstDateCalendar=(event, selectedDate)=>{
        const currentDate = selectedDate || dateFirst;
        setShowDateFirst(false);
        setDateFirst(currentDate);
    }

    const setFinalDateCalendar=(event, selectedDate)=>{
        const currentDate = selectedDate || dateFirst;
        setShowDateFinal(false);
        setDateFinal(currentDate);
    }

    return (
        <Box bg="white" flex={1}>
            <Heading color="#9d0039" borderTopWidth={3} borderBottomWidth={3} borderColor="#9d0039" p={2} m={5} textAlign="center">Movimentações</Heading>
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
                            borderRadius="15px"
                            borderWidth={3}

                        />
                        
                        {showDateFirst && (
                            <DateTimePicker
                                testID="movimentsFilterDateFirst"
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
                            placeholder='Selecione a data inicial'
                            placeholderTextColor="#9d0039"
                            borderColor="#9d0039"
                            borderRadius="15px"
                            borderWidth={3}
                        />
                        
                        {showDateFinal && (
                            <DateTimePicker
                                testID="movimentsFilterDateFinal"
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
                    {moviments.length > 0 &&
                        <FlatList
                            w="100%"
                            mt="25px"
                            data={moviments} 
                            refreshing={loading}
                            renderItem={({item})=>(
                                <CardMoviment info={item}/>
                            )}
                            keyExtractor={((item)=>item.id.toString())}
                        />
                    }

                    {loading &&
                        <Box mt="180px">
                            <Spinner size="lg" color='#9d0039' accessibilityLabel="Carregando Movimentações"/>
                        </Box>
                    }

                    {moviments.length === 0 && loading===false &&
                        <Text color="#9d0039" fontWeight='bold' mt="135px" borderColor="#9d0039" borderBottomWidth={3} fontSize="20px">Nenhuma movimentação listada.</Text>
                    }
                </Center>
            </Box>
        </Box>
    )
}