import React, { useState } from 'react'
import { connect } from "react-redux";
import todo from '../Config/Store/Action/Action';

function Todo(props) {

const [inp,setInp] = useState("")


const handlechange=(e)=>{
  setInp(e.target.value)


}
const handelSubmit=()=>{

// console.log(inp)




    console.log(props.item)
}
const handledelete=()=>{
  alert("heloo")
}





  return (
    <div>
      <h1>{props.count}</h1>
     

<input type="text" name="" id="" onChange={(e)=>handlechange(e)} />
<button onClick={()=>handelSubmit()}>Add Item</button>

 <br />

{
        props.item.map((v,i)=>{
        return(
          <>
                   <h1>{v}  </h1>
         <button onClick={()=>(handledelete())}>Delete</button> 
          </>
        )

        })
      }



    </div>
  )
}

const get=(state)=>({
    count: state.count,
    item:state.item
})
const setitem =(dispatch)=>({

todo :(data)=>dispatch(todo(data))


})


export default connect(get,setitem)(Todo)
