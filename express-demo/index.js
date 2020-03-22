const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const Joi = require('@hapi/joi');
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');
const logger = require('./logger');
const morgan =require('morgan');
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

app.use(logger);

// Configuration
console.log('Application name: ' + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if(app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabled...')
}

dbDebugger('Connected to the database....');

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
]
/**
 * GET request
 */
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send('The course with the given ID was not found.');
    return;
  }
  res.send(course);
});

/**
 * POST request
 */
app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);
  
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
});

/**
 * PUT request
 */
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send('The course with the given ID was not found.');
    return;
  }
  
  const { error } = validateCourse(req.body);
  
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  course.name = req.body.name;
  res.send(course)
})

/**
 * DELETE request
 */
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send('The course with the given ID was not found.');
    return;
  }

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
})


function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  })

  return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on Port ${port}...`);
})