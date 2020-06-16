const express = require('express');
const app = express();
const { GraphQLSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const schema = new GraphQLSchema();

const port = process.env.PORT || 5000;

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

