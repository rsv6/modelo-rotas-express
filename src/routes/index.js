module.exports = app => {
  // home.routes(app)
  home: require(`../controllers/home`).routes(app)
  about: require(`../controllers/about`).routes(app)
}