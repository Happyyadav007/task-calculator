const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use((req, res) => res.status(404).json({ error: 'not found' }));

const start = () => {
  const server = app.listen(config.port, () => {
    console.log('server running on port', config.port);
  });
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error('port already in use. change PORT in .env or free the port');
    } else {
      console.error('error:', err);
    }
    process.exit(1);
  });
};

start();
