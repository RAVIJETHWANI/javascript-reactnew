const initialState=0;
const ChangeNumber=(state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT": return state+1;
        case "DECREAMENT": return state-1;
        default: return state;
    }
}

export default ChangeNumber