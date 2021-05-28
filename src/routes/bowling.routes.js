module.exports = app => {
  const bowlings = require('../controllers/bowling.controller');

  var router = require('express').Router();

  // Create a new Bowling
  router.post('/', bowlings.create);

  // Retrieve all Bowlings
  router.get('/', bowlings.findAll);

  // Retrieve all published Bowlings
  router.get('/published', bowlings.findAllPublished);

  // Retrieve a single Bowling with id
  router.get('/:id', bowlings.findOne);

  // Delete a Bowling with id
  router.delete('/:id', bowlings.delete);

  // Delete all Bowlings
  router.delete('/', bowlings.deleteAll);

  app.use('/api/bowlings', router);
};
