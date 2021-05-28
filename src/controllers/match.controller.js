const db = require('../models');
const Match = db.match;
const Op = db.sequelize.Op;

// Create and save a new Match
exports.create = (req, res) => {
  // Valid request
  if (!req.body.team) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a Match
  const match = {
    team: req.body.team,
    opponent: req.body.opponent,
    home: req.body.home ? req.body.home : false
  };

  // Save Match in the database
  Match.create(match)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Match."
      });
    });
};

// Retrieve all Matches from the database
exports.findAll = (req, res) => {
  const title = req.query.team;
  var condition = team ? { team: { [Op.like]: `%${team}%` } } : null;

  Match.findAll({ where: condition })
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

// Find a particular Match by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Match.findByPK(id)
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

// Update a match by id
exports.update = (req, res) => {
  const id = req.params.id;

  Match.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Match was updated successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot update Match with id=${id}. Maybe Match was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Match with id" + id
      });
    });
};

// Delete a Match by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Match.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Match was deleted successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot delete match with id=${id}. Maybe Match was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Match with id" + id
      });
    });
};

// Delete all Matches from the database
exports.deleteAll = (req, res) => {
  Match.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Matches were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Matches."
      });
    });
};

// Find all home Matches
exports.findAllPublished = (req, res) => {
  Match.findAll({ where: { home: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving Matches."
      });
    });
};
