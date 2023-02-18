const News = require("../model/News.model");

const addNews = async (req, res) => {
  const { title, body, author, imageUrl, source, category, location } =
    req.body;

  const news = new News({
    title,
    body,
    author,
    imageUrl,
    source,
    category,
    location,
  });

  await news
    .save()
    .then((createdNews) => res.json(createdNews))
    .catch((error) => res.status(400).json("Error: " + error));
};

const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.json(news);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const updateNews = async (req, res) => {
  News.findByIdAndUpdate(req.params.id)
    .then((existingNews) => {
      existingNews.title = req.body.title;
      existingNews.author = req.body.author;
      existingNews.body = req.body.body;
      existingNews.imageUrl = req.body.imageUrl;
      existingNews.source = req.body.source;
      existingNews.category = req.body.category;
      existingNews.location = req.body.location;
      existingNews
        .save()
        .then((updatedNews) => res.json(updatedNews))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

const deleteNews = async (req, res) => {
  News.findByIdAndDelete(req.params.id)
    .then((deletedNews) => {
      res.json(deletedNews);
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

module.exports = {
  addNews,
  getNews,
  getNewsById,
  updateNews,
  deleteNews,
};
