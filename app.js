const express = require('express');
const http = require('http');
const ejs = require('ejs');


const app = new express();

app.set('view engine', 'ejs');
app.use('/images', express.static(__dirname + '/public/images'));

const port = 2500 || process.env.port;



app.get('/', (req, res) => {
    res.status(200).render('../views/index.ejs');
});
app.get('/index', (req, res) => {
    res.status(200).render('../views/index.ejs');
});

app.get('/*', (req, res) => {
    res.status(404).render('../views/error404.ejs');
});




app.get('/*', (req, res) => {
    res.status(404).send("eoor no page found ");
});

http.createServer(app).listen(port, () => {
    console.log("dontw worry shekhar is here " + port);
});