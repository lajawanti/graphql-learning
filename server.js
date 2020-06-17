const express = require('express');
const app = express();
const { graphql, GraphQLSchema, GraphQLList, GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');
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
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',
        fields: () => ({
            users: {
                type: new GraphQLList(UserType),
                resolve: (parent, args) => {
                    return users;
                },
            },
            user: {
                type: UserType,
                args: {
                    id: {
                        type: GraphQLInt,
                    },
                },
                resolve: (parent, { id }) => {
                    const user = users.filter(user => user.id == id)
                    return user[0];
                },
            },
        }),
    })
});

//For REST api CRUD operation end points 
// For GraphQL only one endpoint which will be POST /graphql
app.use('/graphql', graphqlHTTP({
                        schema,
                        graphql : true,  
                    }),
);

app.get('/', (req, res) => {
    res.send('SERVER  UP 👍')
})

//will list out all users without query at client end
app.get('/users', (req, res) => {
    const query = `query {users{id name age}}`;
    graphql(schema, '{users{id, name, age}}', query)
        .then(response => res.send(response))
        .catch(err => res.send(err));
})

app.get('/user/:id', (req, res) => {
    const query = `query {user(id: ${req.params.id}) {id, name, age}}`;
    graphql(schema, query)
        .then(response => res.send(response))
        .catch(err => res.send(err));
})

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT : ${port}`)
});

