const router = require("express").Router();

let User = require("../models/user.model");

// To display all users from database
router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.status(404).json("Error:" + err));
});

router.post("/add", (req, res) => {
  
  delete req.body._id;
  const username = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message,
  };

  const newUser = new User(username);
  

  newUser.save(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    
    res.json({
      new: "User added",
    });
  });
});

module.exports = router;
