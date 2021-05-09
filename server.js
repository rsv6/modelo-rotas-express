require("dotenv/config")
const app = require('./config')
const port = process.env.PRT

const routes = require(`./src/routes`)
routes(app)

app.listen(port, console.log(`Server running on port: ${port}`))