const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    title: String,
    image: String
});

const newAnimeModel = mongoose.model('AnimeModel', AnimeSchema)
module.exports = newAnimeModel;