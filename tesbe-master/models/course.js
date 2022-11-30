const Track = require("./track");
const Module = require("./module");
const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Course = db.define("course", {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  image: Sequelize.STRING,
  track_id: Sequelize.INTEGER,
  instructure_id: Sequelize.INTEGER,
  exp_point: Sequelize.INTEGER,
});

Course.hasOne(Track, { foreignKey: "id" });
Course.belongsTo(Track, { foreignKey: "track_id" });

module.exports = Course;
