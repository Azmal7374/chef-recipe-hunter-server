const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const latesCategory = require('./data/latesarticles.json')
const chefData = require('./data/chefs.json')
const topchef = require('./data/topchef.json')
app.use(cors());


app.get('/', (req, res) =>{
    res.send('Chef-Recipe-Hunter-Server');
})

app.get('/latesarticles',(req, res) =>{
    res.send(latesCategory)
})

app.get('/topChef',(req, res) =>{
    res.send(topchef)
})

app.get('/chefData', (req, res) =>{
    res.send(chefData)
})


app.get('/chefData/:id', (req, res) =>{
    const id = req.params.id
    console.log(id);
   if(id) {
    const chefDetails =chefData.filter(d => d.category_id == id) 
    console.log(chefDetails);
    res.send(chefDetails)
   }
   else{
    res.send([])
   }
})

app.listen(port, ()=>{
    console.log(`Chef-Recipe API is running on port:${port}`);

   
})


