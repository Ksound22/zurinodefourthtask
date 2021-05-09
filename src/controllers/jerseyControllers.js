const Footballer = require("../models/footballer");

// Post route to create footballer
exports.createFootballer = (req, res) => {
  Footballer.create(
    {
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      club: req.body.club,
      number: req.body.number,
      age: req.body.age,
    },
    (err, footballer) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "ERROR Creating footballer", err });
      } else {
        res
          .status(200)
          .json({ message: "Footballer created successfully", footballer });
      }
    }
  );
};

// Get toute to fetch all footballers
exports.fetchFootballers = (req, res) => {
  Footballer.find({}, (err, footballers) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "ERROR Getting footballers", err });
    } else {
      return res.status(200).json({ message: footballers });
    }
  });
};

// Get single footballer
exports.fetchSingleFootballer = (req, res) => {
  Footballer.findById(req.params.id, (err, footballer) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "ERROR Fetching footballer", err });
    } else if (!footballer) {
      return res.status(404).json({ message: "Footballer not found" });
    } else {
      return res.status(200).json({ message: footballer });
    }
  });
};

// Update single footballer
exports.updateSingleFootballer = (req, res) => {
  Footballer.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      club: req.body.club,
      number: req.body.number,
      age: req.body.age,
    },
    (err, footballer) => {
      if (err) {
        return res.status(500).json({ message: "ERROR Updating jersey", err });
      } else if (!footballer) {
        return res.status(404).json({ message: "Footballer not found" });
      } else {
        footballer.save((err, savedFootballer) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "ERROR Updating jersey", err });
          } else {
            res
              .status(200)
              .json({ message: "Footballer updated successfully" });
          }
        });
      }
    }
  );
};

// Delete single footballer
exports.deleteSingleFootballer = (req, res) => {
  Footballer.findByIdAndDelete(req.params.id, (err, footballer) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "ERROR Deleting footballer", err });
    } else if (!footballer) {
      return res.status(404).json({ message: "Footballer not found" });
    } else {
      return res
        .status(200)
        .json({ message: "Footballer deleted successfully" });
    }
  });
};
