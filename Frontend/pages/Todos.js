import React,{useEffect} from 'react'
import axios from 'axios'
import ToDo from './ToDo'
import {useStateValue} from '../StateProvider'
import './Todos.css'
function Todos() {
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
useEffect(()=>{

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
    const getData = async ()=>{
        await axios.get(`http://localhost:4000/todos/${today}`)
        .then(res=>{
        dispatch({
            type:"GET_TODOS",
            item:res.data
        })
        })
        .catch(err=>console.log(err))
    }
    getData()
},[dispatch])    

const getList = async (e)=>{
        today = e.target.value
        await axios.get(`http://localhost:4000/todos/${today}`)
        .then(res=>{
           dispatch({
               type:"GET_TODOS",
               item:res.data
           })
        })
        .catch(err=>console.log(err))
    }
    

    
    
    return (
        <div className="todos">
            <input type="date" className="todos__date" defaultValue={today} onChange={getList}/>
            {todos.map(value=><ToDo key = {value._id} task = {value.task} status = {value.status}
             id ={value._id} date={value.date}/>)}
        </div>
    )
}

export default Todos
