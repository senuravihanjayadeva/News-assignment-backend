const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  addNews,
  getNews,
  getNewsById,
  updateNews,
  deleteNews,
} = require("../controller/News.controller");

//@route  GET api/news/all
//@desc   get all news
//@access Public
router.get("/", getNews);

//@route  GET api/news/:if
//@desc   get news by Id
//@access Public
router.get("/:id", getNewsById);

//@route  POST api/news
//@desc   add news
//@access Private
router.post("/", auth, addNews);

//@route  PUT api/news
//@desc   update news
//@access Private
router.put("/:id", auth, updateNews);

//@route  DELETE api/news
//@desc   delete news
//@access Private
router.delete("/:id", auth, deleteNews);

module.exports = router;
