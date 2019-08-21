import express = require('express');
import {router} from "./Routes/route"
import {cors} from "./Middleware/cors";
import {notFound, errorHandler} from "./Middleware/errors";

// Create a new express application instance
const app: express.Application = express();

// Cors middleware
app.use(cors);

// Routes
app.use('/', router);

// NotFound middleware
app.use(notFound);

// Error Handler middleware
app.use(errorHandler);

export {app};
