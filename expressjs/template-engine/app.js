const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;
const path = require('path');

const viewPath = path.join(__dirname, 'templates/views');
const partialPath = path.join(__dirname, 'templates/partials');

//set view engine
app.set('view engine', 'hbs');
app.set('views', viewPath);

//register partials
hbs.registerPartials(partialPath);

//template engine Routes
app.get('/', (req, res) => {
    res.render('index', {name: 'Mahesh Bodhgire'})
})


app.listen(port, () => {
    console.log('App Started');
})