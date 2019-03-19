const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api_routes = require('./routes/api_routes_v1');

const PORT = process.env.PORT || 3001;
const app = express();
const api = express();

app.use(bodyParser.json({verify:function(req,res,buf){try{req.rawBody=buf.toString('utf8')}catch(e){}}}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
});


// API Endpoints
app.use('/api', api);
app.use(api_routes); 