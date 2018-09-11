const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((requestAnimationFrame, res) => {
    res.end('Welcome to Node');
});

server.listen(port, hostname, () => {
    console.log('Server running at '+ hostname + ' ' + port);
});

// lines 1 - 11 then at cmd 'node index'
// comes back with 'Server running at localhost 3000'
//
// in a browser 'localhost:3000' displays 'Welcome to Node'

// in package.json add "start": "node index"
// then the server can be started at cmd with 'npm  start'