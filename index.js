const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const latesCategory = require('./data/latesarticles.json')

app.use(cors());


app.get('/', (req, res) =>{
    res.send('Chef-Recipe-Hunter-Server');
})

app.get('/latesarticles',(req, res) =>{
    res.send(latesCategory)
})


app.listen(port, ()=>{
    console.log(`Chef-Recipe API is running on port:${port}`);
})


