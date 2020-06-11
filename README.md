# graphql-learning
- GraphQL is a query language that provides an efficient, powerful and flexible approach to developing web APIs. It's a way to make query smarter.

## Advantages of using GraphQL over REST APIs

One of the most common problems with REST is that of over and under fetching of data. These happen because the only way for a client to download data is by hitting endpoints that return fixed data structures. It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs.

- GraphQL reduces network requests by allowing us to fetch or retrieve all the data we need in a single query.

- GraphQL implementation mainly contains three parts

Schema – Describes the data
Resolvers – Logic for fetching data from different resources (microservices)
Query – Client asks for what data to be fetched
