const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  const worker = new Worker('./long-task.js');

  worker.on('message', result => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Result: ${result}`);
  });

  worker.on('error', err => {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// long-task.js
const { parentPort } = require('worker_threads');

let result = 0;
for (let i = 0; i < 1000000000; i++) {
  result += i;
}

parentPort.postMessage(result);