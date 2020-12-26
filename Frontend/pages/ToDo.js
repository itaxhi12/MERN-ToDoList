import axios from 'axios'
import React,{useState} from 'react'
import {useStateValue} from '../StateProvider'
import './ToDo.css'
function ToDo({key,id,task,status}) {
    const [{todos},dispatch] = useStateValue()
    const changeStatus=()=>{
        axios.put(`http://localhost:4000/todos/${id}`,{status:true}).then(()=>{
            dispatch({
                type:"CHANGE_STATUS",
                id:id
            })
        }).catch(err=>console.log(err))
    
    }

    const deleteTask = ()=>{
        axios.delete( `http://localhost:4000/todos/${id}`).then(()=>{
            dispatch({
                type:"REMOVE_TASK",
                id:id
            })
        }).catch(err=>console.log(err))
        
            
    }
    return (
        <div className="todo">

               <button style={{border:"none",fontSize:"large",background:"transparent",outline:"none"}} onClick={deleteTask}> <i className="far fa-times-circle" style={{color:"red",fontSize:"large"}}></i></button>
               {status?(<h3 style={{textDecorationLine:"line-through"}}>{task}</h3>):(<h3>{task}</h3>)}
               
               
               {status?(<div></div>):(<input type="checkbox" 
                value={true}
                onChange={
                    changeStatus()
                }
                
                />)}
                
            
        </div>
    )
}

export default ToDo
