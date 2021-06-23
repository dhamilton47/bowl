const db = require('../models');
const Bowling = db.bowling;
const Op = db.sequelize.Op;

// Create and save a new Bowling
exports.create = (req, res) => {
  // Valid request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a Bowling
  const bowling = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Bowling in the database
  Bowling.create(bowling)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Bowling."
      });
    });
};

// Retrieve all Bowlings from the database
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Bowling.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Bowlings."
      });
    })
};

// Find a particular Bowling by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Bowling.findByPK(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          "Error retrieving Bowling with id=" + id
      });
    });
};

// Update a Bowlings by id
exports.update = (req, res) => {
  const id = req.params.id;

  Bowling.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bowling was updated successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot update Bowling with id=${id}. Maybe Bowling was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bowling with id" + id
      });
    });
};

// Delete a Bowling by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Bowling.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bowling was deleted successfully!"
        });
      } else {
        res.send({
          message:
            `Cannot delete Bowling with id=${id}. Maybe Bowling was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bowling with id" + id
      });
    });
};

// Delete all Bowlings from the database
exports.deleteAll = (req, res) => {
  Bowling.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Bowlings were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Bowlings."
      });
    });
};

// Find all published Bowlings
exports.findAllPublished = (req, res) => {
  Bowling.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving Bowlings."
      });
    });
};
