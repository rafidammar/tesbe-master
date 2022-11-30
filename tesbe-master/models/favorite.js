const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Favorite = db.define("favorite", {
  user_id: Sequelize.INTEGER,
  event_id: Sequelize.INTEGER,
});

module.exports = Favorite;
