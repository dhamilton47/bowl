const db = require('../models');
const Game = db.game;
const Op = db.sequelize.Op;

// Create and save a new Game
exports.create = (req, res) => {
  // Valid request
  if (!req.body.match_id) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a Game
  const game = {
    player_name: req.body.player_name,
    player_id: req.body.player_id,
    team_id: req.body.team_id,
    match_id: req.body.match_id,
    frame1: 0,
    frame2: 0,
    frame3: 0,
    frame4: 0,
    frame5: 0,
    frame6: 0,
    frame7: 0,
    frame8: 0,
    frame9: 0,
    frame10: 0,
    total_score: 0,
  };

  // Save Game in the database
  Game.create(game)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Game."
      });
    });
};
/*
// Retrieve all Games from the database
exports.findAll = (req, res) => {
  const title = req.query.team;
  var condition = game ? { game: { [Op.like]: `%${team}%` } } : null;

  Game.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Matches."
      });
    })
};

// Find a particular Game by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Game.findByPK(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          "Error retrieving Match with id=" + id
      });
    });
};

// Update a Game by id
exports.update = (req, res) => {
  const id = req.params.id;

  Game.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Game was updated successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot update Game with id=${id}. Maybe Game was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Match with id" + id
      });
    });
};

// Delete a Game by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Game.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Game was deleted successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot delete Game with id=${id}. Maybe Game was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Game with id" + id
      });
    });
};

// Delete all Games from the database
exports.deleteAll = (req, res) => {
  Game.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Game were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Game."
      });
    });
};

// Find all home Games
exports.findAllPublished = (req, res) => {
  Game.findAll({ where: { home: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving Games."
      });
    });
};*/
