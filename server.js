import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server'
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import dotenv from 'dotenv';
import mergedTypeDefs from './typeDefs/index.js';
import mergedResolvers from './resolvers/index.js';
import {connectDB} from './db_connect/connectDB.js';
import passport from 'passport';
import session from 'express-session';
import connectMongo from 'connect-mongodb-session';
import {  buildContext } from 'graphql-passport';
import { configurePassport } from './passport/passport.config.js';

// Load environment variables from .env file
dotenv.config();

configurePassport();

const app = express();

const httpServer = http.createServer(app);

const MongoDBStore = connectMongo(session);
// Create the MongoDB store instance
const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions"
});

// Debugging and error handling
store.on("error", (err)=> console.log(err));

// ? what app.use will do
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // whether to save session to store on every request
    saveUninitialized: false, // whether to sae uninitialized session
    cookie: {
      maxAge: 1000*60*60*24*7,
      httpOnly: true // prevents the cross site scripting (XSS attacks)
    },
    store: store

  })
)
app.use(passport.initialize());
app.use(passport.session());


const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// Ensure we wait for our server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  "/",
  cors({
    origin: "http://localhost:3000",
    credentials: true
  }),
  express.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req, res }) => buildContext({ req, res }) // context is object that is shared among all the resolvers, whatever we passed in context can be used in resolver.Here we are passing request and response
  })
);

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
await connectDB();

console.log('Server ready at http://localhost:4000/');