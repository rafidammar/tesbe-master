const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Article = db.define("article", {
  user_id: Sequelize.INTEGER,
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  topic_id: Sequelize.INTEGER,
});

module.exports = Article;
