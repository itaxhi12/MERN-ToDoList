const mongoose = require('mongoose')
const schema = mongoose.Schema
const ToDoSchema = new schema({
    task:{
        type:String,
        required:true,
        default:false
    },
    status:{
        type:Boolean,
        default:false,
        required:true
    },
    date:{
        type:String,
        required:true,
    }
})


const ToDo = mongoose.model('todo',ToDoSchema)
module.exports = ToDo