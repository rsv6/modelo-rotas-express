const homeController = require(`./home-controller`)

module.exports = app => {
  app
    .route('/')
    .get(homeController.get)
}