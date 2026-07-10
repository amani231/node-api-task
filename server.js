const express = require('express');
const app = express();

// 1. Use port 3000
const PORT = 3000;

// 2. Built-in Express middleware to unpack incoming JSON data payloads
app.use(express.json());

// 3. Mock database array containing the two initial objects
let books = [
    { id: 1, title: "Harry Potter" },
    { id: 2, title: "Lord of the Rings" }
];

// 4. GET route at '/api/books' that returns the list of all books as JSON
app.get('/api/books', (req, res) => {
    res.json(books);
});

// 5. POST route at '/api/books' that accepts a new book object via req.body,
//    pushes it into the book array, and returns a plain text string.
app.post('/api/books', (req, res) => {
    const newBook = req.body; // Accepts the incoming book object
    
    // Quick validation to ensure an object was passed
    if (!newBook || Object.keys(newBook).length === 0) {
        return res.status(400).send("Invalid book data");
    }

    books.push(newBook); // Pushes it into the books array
    
    // Returns the exact requested plain text string
    res.set('Content-Type', 'text/plain');
    res.send("book added successfully");
});

// Start the server
app.listen(PORT, () => {
    console.log(` Full-Stack Server running on http://localhost:${PORT}`);
});