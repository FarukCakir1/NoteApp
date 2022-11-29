const express = require("express")
const cors = require("cors")
const config = require("./config");
const loaders = require("./loaders");
const app = express()
const {NoteRoutes, UserRoutes, CategoriesRoutes} = require("./routes/index")

config();
loaders();
app.use(express.json())
app.use(cors())

app.listen(process.env.APP_PORT, () => {
    console.log(`server started at port ${process.env.APP_PORT}`)
    app.use("/notes", NoteRoutes)
    app.use("/users", UserRoutes)
    app.use("/categories", CategoriesRoutes)
})