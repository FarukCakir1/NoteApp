const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authenticate")

// controllers
const {create, read, remove} = require("../controllers/NoteController")

router.route("/").get(auth, read)
router.route("/").post(auth, create)
router.delete("/:id", remove)


module.exports = router