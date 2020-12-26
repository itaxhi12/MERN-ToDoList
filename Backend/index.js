const express  = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db/server')
const ToDo = require('./db/model')
const port = 4000
const app = express()

var corsoption = {
    origin : "http://localhost:4000"
}

app.use(bodyParser.json())
app.use(cors(corsoption))
app.use(bodyParser.urlencoded(({extended:true})))


db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch((err)=>console.log(err))


app.get('/',(req,res)=>{
    res.send("<h1>Welcome</h1>")
    res.end()
})

app.get('/todos',(req,res)=>{
    ToDo.find()
    .then(todo=>{
        res.json(todo)
    }).catch(err=>{
        console.log(err)
    })
})

app.get('/todos/:date',(req,res)=>{
    ToDo.find({date:req.params.date},(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.json(data)
            res.end()
        }
    })
})

app.post('/todos',(req,res)=>{
        const todo = new ToDo(req.body)
        todo.save().then(r=>{
            res.send(r)
            res.end()
    })
})
app.delete('/todos/:_id',(req,res)=>{
    ToDo.findByIdAndDelete({_id:req.params._id},(err,r)=>{
        if(err){
            res.send(err)
            res.end()
        }
        else{
            res.send("done")
        res.end()
        }
        
    })
        
})

app.put('/todos/:_id',(req,res)=>{
    ToDo.findByIdAndUpdate({_id:req.params._id},{$set:{status:req.body.status}},{new:true,useFindAndModify:false},(err,data)=>{
        res.send("updated")
        res.end()
    })
})

app.listen(port ,()=>console.log("app listening on port 4000")) 