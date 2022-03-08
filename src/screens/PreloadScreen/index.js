import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React,{useEffect} from "react";
import { useStateValue } from "../../contexts/StateContext";
import Style from './style';

export default ()=>{
    const navigation=useNavigation();
    const [context,dispatch]=useStateValue();
    
    useEffect(()=>{
        checkLogin();
    },[]);

    const checkLogin=async ()=>{
        let token=await AsyncStorage.getItem('token');
        if(token){
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
            <Style.LoadingIcon color="#006a9c" size="large"/>
        </Style.Container>
    )
}