const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


//allow cross-origin requests

app.use(cors());

app.use('/graphql',graphqlHTTP({

    schema:schema,
    graphiql:true,

}));

const uri = "Enter Url Here";
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })

app.listen(4000,()=> {
    console.log('now listening for request on port 4000');

});