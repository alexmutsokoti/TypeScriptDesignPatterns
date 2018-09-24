const  CoffeeDecoratorPattern  = require('./dist/StructuralPatterns/DecoratorPattern/index.js');
const  BillingStrategyPattern  = require('./dist/BehavioralPatterns/StrategyPattern/index.js');

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Create Express
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4400';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`running on localhost:${port}`));

CoffeeDecoratorPattern.CoffeeDecoratorPattern.prototype.run();
BillingStrategyPattern.BillingStrategyPattern.prototype.run();