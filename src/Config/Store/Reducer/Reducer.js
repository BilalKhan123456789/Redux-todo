const initial_State={
    count: 0,
    item:[]
}


export default (state=initial_State,action)=>{
switch (action.type) {
    case "todo":
       return {
        ...state,
        item:[...state.item,action.paylod]
    }
       ;

    default:
     return  state;
}



}