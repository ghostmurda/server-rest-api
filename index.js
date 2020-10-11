const express = require('express')
const PORT = process.env.PORT || 5000
const server = express();

server.use('/api', require('./api/router'));

server.listen(PORT, () => console.log(`Listening on ${ PORT }`));
