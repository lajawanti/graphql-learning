const express = require('express');
const app = express();
const { GraphQLSchema, GraphQLList, GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');
const graphqlHTTP = require('express-graphql');

const port = process.env.PORT || 5000;

// Temporary data 
const users = [
    {id: 1, name : "Tine", age: 40},
    {id: 2, name : "Bob", age: 35},
    {id: 3, name : "Himanshu", age: 30},
    {id: 4, name : "Parth", age: 25},
    {id: 5, name : "Sam", age: 22}
];

//Declare user type in detail
const UserType = new GraphQLObjectType({
    name: 'Users',
    description: '....',
    fields: {
        id : {type : GraphQLInt},
        name : {type : GraphQLString},
        age : {type : GraphQLString}
    }
});

const schema = new GraphQLSchema({
    name: 'Query',
    description: '...',
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            resolve: (parent, args) => {
                return users;
            },
        },
    }),
});


app.get('/', (req, res) => {
    res.send('SERVER  UP 👍')
})

app.use('/graphql', graphqlHTTP({
                            schema,
                            graphql : true,  
                    }),
);


app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT : ${port}`)
});

