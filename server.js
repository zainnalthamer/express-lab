// setting up the server
const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Server is running');
});

app.use(express.static('public'));

// creating routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\views\\index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '\\views\\about.html');
})

app.get('/test', (req, res) => {
    res.send('Success!');
})