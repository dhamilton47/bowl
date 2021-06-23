module.exports = app => {
  const players = require('../controllers/player.controller');

  var router = require('express').Router();

  // Create
  router.post('/', players.create);

  // Retrieve all
  router.get('/', players.findAll);
/*
  // Retrieve all
  router.get('/team', player.findAllTeam);

  // Retrieve by id
  router.get('/:id', players.findOne);

  // Delete with id
  router.delete('/:id', players.delete);
*/
  // Delete all
  router.delete('/', players.deleteAll);
  
  app.use('/api/players', router);
};
