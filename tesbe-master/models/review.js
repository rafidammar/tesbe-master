const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Review = db.define("review", {
  user_id: Sequelize.INTEGER,
  course_id: Sequelize.INTEGER,
  star: Sequelize.INTEGER,
  review: Sequelize.TEXT,
});

module.exports = Review;
