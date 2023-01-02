const Movie = require("../models/movie");
const movieCreate = async (req, res) => {
  console.log(req.file);
  return;
  const movieData = await Movie.create({
    title: req.body.title,
    publisher: req.body.publisher,
    producer: req.body.producer,
    genre: req.body.genre,
    age: req.body.age,
  });
  return res.send(movieData);
};
const getMovie = async (req, res) => {
  const movieData = await Movie.find({});
  return res.send(movieData);
};
const deleteMovie = async (req, res) => {
  const deleteData = await Movie.deleteOne({ _id: req.body_id });
  return res.send(deleteData);
};
module.exports = {
  movieCreate,
  getMovie,
  deleteMovie,
};
