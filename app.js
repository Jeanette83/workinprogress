require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const connectDB = require('./server/config/db');
//const { isActiveRoute } = require('./server/helpers/routehelpers');

const app = express();
const PORT = process.env.PORT || 5000;

//connect to DB
connectDB();

app.use(express.json());



app.use(express.static('public'));


//here is our templating engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

//app.locals.isActiveRoute = isActiveRoute;

app.use('/', require('./server/routes/main'));



app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});
