const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  for (let i = 0; i < 1000000000; i++) {};

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});