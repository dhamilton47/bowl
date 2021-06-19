const db = require('../models');
const Player = db.players;
const Op = db.sequelize.Op;

// Create and save
exports.create = (req, res) => {
  // Valid request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create
  const player = {
    schoolId: req.body.schoolId,
    name: req.body.school,
  };
  console.log(player);
  // Save in the database
  Player.create(player)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating record."
      });
    });
};

// Retrieve all
exports.findAll = (req, res) => {
  const athletes = req.query.player;
//  var condition = team ? { team: { [Op.like]: `%${team}%` } } : null;

  Player.findAll()
//Team.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    })
};
/*
// Find a particular Team by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Player.findByPK(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          "Error retrieving id=" + id
      });
    });
};

// Update by id
exports.update = (req, res) => {
  const id = req.params.id;

  Player.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Updated successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot update id=${id}. Maybe record was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating id" + id
      });
    });
};

// Delete a Player by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Player.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Deleted successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot delete id=${id}. Maybe record was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete id" + id
      });
    });
};
*/
// Delete all Teams from the database
exports.deleteAll = (req, res) => {
  Player.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} records deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing records."
      });
    });
};
