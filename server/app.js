const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();
app.use('/graphql',graphqlHTTP({

    schema:schema,
    graphiql:true,

}));

mongoose.connect("mongodb+srv://Mern:Mern@cluster0.4ohke.mongodb.net/GRAPHQL-PROJECT?retryWrites=true&w=majority")
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.listen(4000,()=> {
    console.log('now listening for request on port 4000');

});