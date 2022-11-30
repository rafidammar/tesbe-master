const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Start_Course = db.define("start_course", {
  user_id: Sequelize.INTEGER,
  course_id: Sequelize.INTEGER,
  status_id: Sequelize.INTEGER,
});

module.exports = Start_Course;
