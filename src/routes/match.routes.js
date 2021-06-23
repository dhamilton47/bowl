module.exports = app => {
  const matches = require('../controllers/match.controller');

  var router = require('express').Router();

  // Create a new Match
  router.post('/', matches.create);

  // Retrieve all Matches
  router.get('/', matches.findAll);
/*
  // Retrieve all published Matches
  router.get('/published', matches.findAllPublished);

  // Retrieve a single Match with id
  router.get('/:id', matches.findOne);

  // Delete a Match with id
  router.delete('/:id', matches.delete);
*/
  // Delete all Matches
  router.delete('/', matches.deleteAll);

  app.use('/api/matches', router);
};
