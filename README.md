# Node.js Server Hanging on Long-Running Task

This repository demonstrates a common issue in Node.js applications where a long-running task within the request handler causes the server to hang.  The server becomes unresponsive to new requests until the long task completes.

## Bug
The `bug.js` file contains a Node.js server that simulates a long-running task in its request handler.  This task blocks the event loop, preventing the server from processing other requests. 

## Solution
The `bugSolution.js` file demonstrates how to solve this issue using asynchronous operations. By offloading the long-running task to a worker thread or using promises and async/await, you prevent blocking the event loop.