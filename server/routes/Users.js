const express = require("express")
const auth = require("../middlewares/authenticate")

const router = express.Router()

const { create, read, login, usersNotes, userCategories } = require("../controllers/UserControllers")

router.get("/", read)
router.post("/", create)
router.post("/login", login)
router.route("/notes").get(auth, usersNotes)
router.route("/categories").get(auth, userCategories)


module.exports = router 