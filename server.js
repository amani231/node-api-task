const express = require('express');
const mockData = require('./data'); //Importing our data file
const app = express();
const PORT = 3000;
// this is a GET Route. when the browser visits '/', it sends a message.
app.get('/', (request,response) => {
    response.send("hello! my node.js server is running!");
});
// this is  an API route.It returns our mock data as JSON.
app.get('/api/users',(request,response) => {
    response.json(mockData);
});
// this tells the server to start listning on door (port)3000
app.listen(PORT,() =>{
    console.log('Server is listening on http://localhost:${PORT} ');
});