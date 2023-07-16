const todo = (data)=>{
return(dispatch)=>{
    dispatch({
        type:"todo",
        paylod:data
    }  )
}
}
export default todo
