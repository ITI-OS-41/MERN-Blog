var express = require('express')
var cors = require('cors')
var app = express()
const router = express.Router();

app.use(cors())
app.use(express.json());

const msgs = [] 

app.post('/msgs', (req,res) => 
{
    console.log(req.body);
    msgs.push(req.body);
    res.status(204).end();
});

