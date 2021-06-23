module.exports = app => {
  const teams = require('../controllers/team.controller');

  var router = require('express').Router();

  // Create a new Team
  router.post('/', teams.create);

  // Retrieve all Teams
  router.get('/', teams.findAll);
/*
  // Retrieve all published Teams
  router.get('/published', teams.findAllPublished);

  // Retrieve a single Team with id
  router.get('/:id', teams.findOne);

  // Delete a Team with id
  router.delete('/:id', teams.delete);
*/
  // Delete all Teams
  router.delete('/', teams.deleteAll);
  
  app.use('/api/teams', router);
};
