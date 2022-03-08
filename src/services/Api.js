import AsyncStorage from "@react-native-async-storage/async-storage";
import qs from 'qs';

const BASEAPI='https://bi.processoagil.com.br/api/v1';

const verifyToken=async (body,fetchFile=false,token='')=>{
    if(token){
        if(fetchFile){
            body.append('token',token);
        }else{
            body.token=token;
        }
    }
    return token;
}


const apiFetchFile= async (endpoint,body)=>{
    let token=await AsyncStorage.getItem('token');

    verifyToken(body,true,token);

    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        body        
    });

    const json= await res.json();

    return json;
    
}

const apiFetchPost=async (endpoint,body)=>{
    //let token=await AsyncStorage.getItem('token');
    //verifyToken(body,false,token);
    
    const res=await fetch(BASEAPI+endpoint,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Basic 6uhhQ3oRc/19y4AqLk0BlC+0kGb3f+Hv6gbEiQuQ2E6oSDqkdbn7VUb2rdt495EOAYrJijgzjpGJ7AYkdCJVFme3rwJ8M1/AnG0eLNZUNEM=',
        },
        body:JSON.stringify(body)
    });

    const json= await res.json();
    return json;
}

const apiFetchGet=async (endpoint,body=[])=>{
    let token=await AsyncStorage.getItem('token');

    verifyToken(body,false,token);
    const res=await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`,
    {
        headers: {
            'Accept': 'application/json',
        }
    });

    const json= await res.json();

    return json;
}

export default {
    doLogin:async (user,password)=>{
        let response=await apiFetchPost('/login',
            {
                "usuario":user,
                "senha":password
            }
        );
        return response;
    }
}