const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./routes/api')
app.use(bodyParser.json())
app.use('/api',api)


app.get('/', (req, res)=>{
    res.send('Result Software')
})

app.listen(PORT, (req, res)=>{
    console.log("Server running on localhost:" + PORT)
})