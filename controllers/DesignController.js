const DesignModel = require('../models/DesignModel')

var total = 0;
var sum = 0;

exports.insertNumbers = async (req,res) => {
  if (!req.body.rating) {
      res.status(400).render('../index', {myData: "Content can not be empty!"})
  }

  const design = new DesignModel({
      rating: req.body.rating
  })

    await design.save().then(data => {
        res.render('../index', {myData: calculate(req,res, data.rating)})
    }).catch(err => {
        res.render('../index', {myData: err.message || "Some error occurred while creating user"})
    })
};

function calculate(req,res, data) {
    sum+=data;
    total++;
    return Math.round((Number)(sum/total))
}


