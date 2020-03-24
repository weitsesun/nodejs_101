const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const course = require('./route/courses');
const home = require('./route/home');
const morgan =require('morgan');
const app = express();

dotenv.config();

app.set('view engine', 'pug');
app.set('views', './views'); //default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

app.use(logger);
app.use('/api/courses', course);
app.use('/', home);

// Configuration
console.log('Application name: ' + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if(app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabled...')
}

dbDebugger('Connected to the database....');


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on Port ${port}...`);
})