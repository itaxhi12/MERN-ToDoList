import React,{useState} from 'react'
import './AddToDo.css'
import axios from 'axios'
import {useStateValue} from '../StateProvider'
function AddToDo() {
const [task,setTask] = useState('')
const [{todos},dispatch] = useStateValue()
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
today = yyyy+'-'+mm+'-'+dd;

const [date,setDate] = useState(today)
    const addTask=(e)=>{
    e.preventDefault()
    const payload= {
        task :task,
        status:false,
        date : date
    }
    if(date.length !==0 && task.length!==0 ){
        axios.post('http://localhost:4000/todos',payload).then(()=>{
            dispatch({
                type:"ADD_TASK",
                item:payload
            })
        }).catch(err=>{console.log(err)})
    }
}

    return (
        <form >
            <input id="task" className ="addtodo__task"  placeholder="add tasks.." autoComplete="off" autoCapitalize="words" onChange={e=>setTask(e.target.value)}/>
            <input id = "date" type="date"  className="addtodo__date" min={today} defaultValue={today} onChange={e=>setDate(e.target.value)}/>
            <button type="submit" className="addtodo__btn" onClick={addTask}>Add Task</button>
        </form>
    )
}

export default AddToDo
