const db = require('../models');
const Team = db.teams;
const Op = db.sequelize.Op;

// Create and save a new Team
exports.create = (req, res) => {
  // Valid request
  if (!req.body.school_name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a Team
  const team = {
    school_name: req.body.school_name,
    school_mascot: req.body.school_mascot,
    city: req.body.city,
    state: req.body.state,
  };
  console.log(team);
  // Save Team in the database
  Team.create(team)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Team."
      });
    });
};

// Retrieve all Teams from the database
exports.findAll = (req, res) => {
  const title = req.query.team;
//  var condition = team ? { team: { [Op.like]: `%${team}%` } } : null;

  Team.findAll()
  //Team.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Teams."
      });
    })
};
/*
// Find a particular Team by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Team.findByPK(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          "Error retrieving Team with id=" + id
      });
    });
};

// Update a Team by id
exports.update = (req, res) => {
  const id = req.params.id;

  Team.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Team was updated successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot update Team with id=${id}. Maybe Team was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Team with id" + id
      });
    });
};

// Delete a Team by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Team.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Team was deleted successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot delete Team with id=${id}. Maybe Game was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Team with id" + id
      });
    });
};
*/
// Delete all Teams from the database
exports.deleteAll = (req, res) => {
  Team.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Team were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Teams."
      });
    });
};
