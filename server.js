const express = require('express');
const app = express();
const PORT = 8383;

let data = {
    name : ['Jane Doe', 'John Doe', 'Alice Smith', 'Bob Johnson']
}

//Middleware to handle the response
app.use(express.json());

//Website Endpoint (they are for sending back HTML, when a user enters a URL in the browser)

app.get('/', (req, res) => {
    res.send('<h1>This is actually HTML Code - HomePage</h1>');
});

app.get('/dashboard',(req,res)=>{
    res.send('<h1>Dashboard</h1>');
})

//API Endpoint

app.get('/api/data', (req,res)=>{
    console.log("This is for data")
    res.send(data);
});

//CRUD Operations - Create, Read, Update, Delete

app.post('/api/data', (req, res) => {
    //to create a user
    const newEntry = req.body;
    console.log("New Entry: ", newEntry);
    data.name.push(newEntry.name); // Assuming data is an array
    res.sendStatus(201); // Created
});

app.delete('/api/data', (req, res) => {
    //to delete a user
    data.name.pop();
    console.log("Deleted Name ");
    res.sendStatus(204); // No Content
});

app.listen(PORT, ()=>console.log(`Server has started on: ${PORT}`))