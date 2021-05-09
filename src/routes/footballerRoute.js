const express = require("express");
const router = express.Router();
const footballerCtrl = require("../controllers/jerseyControllers");

// Post request to create footballer
router.post("/footballer", footballerCtrl.createFootballer);

// Get request to fetch all footballers
router.get("/footballers", footballerCtrl.fetchFootballers);

// Get request to fetch a single footballer
router.get("/footballer/:id", footballerCtrl.fetchSingleFootballer);

// put request to update single footballer
router.put("/footballer/:id", footballerCtrl.updateSingleFootballer);

// Delete request to delete single footballer
router.delete("/footballer/:id", footballerCtrl.deleteSingleFootballer);

module.exports = router;
