const express = require('express');
const bodyParser = require ('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


//Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.info('Successfully connected to the database');
}).catch( err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.json({'message': 'Successful access '})
})


// Require Vote routes
require('./app/routes/vote.routes.js')(app);

// Definition of the PORT
app.listen(3000, () => {
    console.info('Server is listening on PORT 3000');
})
