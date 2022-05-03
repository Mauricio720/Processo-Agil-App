import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React,{useEffect} from "react";
import { useStateValue } from "../../contexts/StateContext";
import Style from './style';
import Api from '../../services/Api';

export default ()=>{
    const navigation=useNavigation();
    const [context,dispatch]=useStateValue();
    
    useEffect(()=>{
        checkLogin();
    },[]);

    const checkLogin=async ()=>{
        let token=await AsyncStorage.getItem('token');
        
        if(token){
            let response=await Api.getProfile(token);
            if(response){
                dispatch({type:'SET_ID',payload:{id:token}});
                dispatch({type:'SET_USER',payload:{user:response}});
            }

            navigation.reset({
                index:1,
                routes:[{name:'DrawerStack'}]
            });
        }else{
            navigation.reset({
                index:1,
                routes:[{name:'LoginScreen'}]
            });
        }
    }

    return (
        <Style.Container>
            <Style.LoadingIcon color="#ff0000" size="large"/>
        </Style.Container>
    )
}