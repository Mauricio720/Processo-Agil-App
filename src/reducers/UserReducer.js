import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState={
    token:'',
    id:'',
}

export default (state=initialState,action={})=>{
    switch (action.type){
        case 'SET_TOKEN':
            AsyncStorage.setItem('token',action.payload.token)
            return {...state,token:action.payload.token};
        case 'SET_ID':
            return {...state,id:action.payload.id};
        default:
            break;    
    }

    return state;
}