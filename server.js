const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

// get port 
const port = process.env.PORT || 3000;

// use templates engine handlebars
hbs.registerPartials( `${__dirname}/views/partials` );
app.set('view engine', 'hbs');

// middleware
app.use ( express.static(`${__dirname}/public`) );

app.get('/', (req, res) => {

    res.render('home', {
        name: 'SERgiO'        
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        name: 'sergio PINto',
    });

});


app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
});