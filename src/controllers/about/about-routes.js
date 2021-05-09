const aboutController = require(`./about-controller`)

module.exports = app => {
  app
    .route('/about')
    .get(aboutController.get)
}