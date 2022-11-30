const express = require("express");
const router = express.Router();

const {
  getAllUser,
  addUser,
  deleteUserByID,
  getUserByID,
  updateUserByID,
  getAllFavorite,
  getFavoriteByID,
  addFavorite,
  updateFavoriteByID,
  deleteFavoriteByID,
  getAllPortofolio,
  getPortofolioByID,
  addPortofolio,
  updatePortofolioByID,
  deletePortofolioByID,
  getAllStartedCourse,
  getStartedCourseByID,
  addStartedCourse,
  updateStartedCourseByID,
  deleteStartedCourseByID,
  getAllStartedTest,
  getStartedTestByID,
  addStartedTest,
  updateStartedTestByID,
  deleteStartedTestByID,
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/", addUser);
router.put("/:id", updateUserByID);
router.delete("/:id", deleteUserByID);

router.get("/:user_id/favorites/", getAllFavorite);
router.get("/:user_id/favorites/:id", getFavoriteByID);
router.post("/:user_id/favorites/", addFavorite);
router.put("/:user_id/favorites/:id", updateFavoriteByID);
router.delete("/:user_id/favorites/:id", deleteFavoriteByID);

router.get("/:user_id/portofolios/", getAllPortofolio);
router.get("/:user_id/portofolios/:id", getPortofolioByID);
router.post("/:user_id/portofolios/", addPortofolio);
router.put("/:user_id/portofolios/:id", updatePortofolioByID);
router.delete("/:user_id/portofolios/:id", deletePortofolioByID);

router.get("/:user_id/started_courses/", getAllStartedCourse);
router.get("/:user_id/started_courses/:id", getStartedCourseByID);
router.post("/:user_id/started_courses/", addStartedCourse);
router.put("/:user_id/started_courses/:id", updateStartedCourseByID);
router.delete("/:user_id/started_courses/:id", deleteStartedCourseByID);

router.get("/:user_id/started_tests/", getAllStartedTest);
router.get("/:user_id/started_tests/:id", getStartedTestByID);
router.post("/:user_id/started_tests/", addStartedTest);
router.put("/:user_id/started_tests/:id", updateStartedTestByID);
router.delete("/:user_id/started_tests/:id", deleteStartedTestByID);

module.exports = router;
