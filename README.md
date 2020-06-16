# graphql-learning
- GraphQL is a query language that provides an efficient, powerful and flexible approach to developing web APIs. It's a way to make query smarter.

## Advantages of using GraphQL over REST APIs

One of the most common problems with REST is that of over and under fetching of data. These happen because the only way for a client to download data is by hitting endpoints that return fixed data structures. It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs.

### GraphQL reduces network requests by allowing us to fetch or retrieve all the data we need in a single query.

### GraphQL implementation mainly contains three parts
- Schema – Describes the data
- Resolvers – Logic for fetching data from different resources (microservices)
- Query – Client asks for what data to be fetched

#### Steps
- npm init -y (This command will create package.json file)
- npm install express express-graphql graphql graphql-tools mongoose nodemon
    - Express is a fast and minimal web framework for Node.js.
    - graphql is the JavaScript reference implementation for GraphQL.
    - express-graphql is a package that allows you to create a GraphQL HTTP server with Express.
    - graphql-tools is a package that allows us to build, mock, and stitch a GraphQL schema using the schema language.
    - mongoose is an object modeling (ODM) tool that we'll use to connect to MongoDB.
    - nodemon is a tool that listens for file changes in a Node app that automatically restarts the server.
