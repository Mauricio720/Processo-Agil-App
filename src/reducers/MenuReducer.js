
const initialState= { 
    menuSelected:null
}

export default (state=initialState,action={})=>{
    switch (action.type){
        case 'SET_SELECTED_MENU':
            return {...state,menuSelected:action.payload.menuSelected};
        default:
        break;    
    }

    return state;
}