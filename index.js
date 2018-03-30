const express = require('express');
var bodyParser = require('body-parser');
const Joi = require('joi');

const c = require("./model/mockItems");

var app = express()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const port =  process.env.PORT || 3000;


const sensors = [
    { id:1, name: 'sensor001'},
    { id:2, name: 'sensor002'},
    { id:3, name: 'sensor003'},
    { id:4, name: 'sensor004'}
];

var i = 0;
var counter = 0;
app.use((req,res,next)=>{
    console.log('ewf');
    res.status(200).json({
        message: 'it works!'
    });
    next();
});
app.get('/api/coins', (req, res) => {
    res.send(c.coins); 
});

app.get('/', (req, res) => {
  res.send('Hello World!!');
  console.log("hit: " + i++);
});

app.get('/api/calendar', (req, res) => {
    res.send(sensors);
    console.log("hit: " + i++);
});

app.post('/api/sensors/', (req, res) => {
    var bodyName = req.body.name;
 
    const sensor = {
            id: sensors.length + 1,
            name: bodyName
    }
    sensors.push(sensor);

    console.log(bodyName);
    console.log(sensors);
    //res.send(sensor);
    res.send(sensors);
});

app.get('/api/sensors/:id', (req, res) => {
    console.log(sensors[1]);
    console.log(`param:  ${sensors[1]}  - ${req.params.id}`);
    let sensor = sensors.find(x=>x.id===parseInt(req.params.id) ); 
    if(!sensor){
        return res.status(404).send(":(");
    }
    
    res.send(sensor);
});
app.get('/api/sensors/:room/:id', (req, res) => { 
    res.send(`params: ${req.params.room}  ${req.params.id} - `);
    console.log(req.params);
    console.log(req.query);
});

var marketTicks = [];
app.post('/api/coins/market', (req, res) => {
    var schema = {
        market: Joi.string().min(5).max(7).required(),
        tick: Joi.number().required()
    };
    const { error } = validateMartketTick(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
 

    var market = req.body.market;
    var tick = req.body.tick;

    const marketTick = {
            id: counter++,
            symbol: market,
            tick: tick,
            date: JSON.stringify(new Date())
    }
    marketTicks.push(marketTick);

    console.log(marketTick);
    //res.send(sensor);
    res.send(marketTicks);
});

/*
/api/coins/:symbol/:tick
/api/coins/ETHBTC/2.345
/api/coins/ETHBTC/0.523
*/


function validateMartketTick(tick){
    var schema = {
        market: Joi.string().min(5).max(7).required(),
        tick: Joi.number().required()
    };
   return Joi.validate(tick, schema);
 }

app.listen(port, () =>{
    console.log(`listening on port::: ${port}...`);
})