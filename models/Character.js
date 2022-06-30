const mongoose = require("mongoose");
const validator = require("validator");

const CharacterSchema = new mongoose.Schema({
  api_id: Number,
  name: String,
  description: String,
  modified: Date,
  thumbnail: {
    path: String,
    extension: String,
  },
  resourceURI: String,
  comics: {
    available: Number,
    collectionURI: String,
    items: [
      {
        resourceURI: String,
        name: String,
      },
    ],
    returned: Number,
  },
  series: {
    available: Number,
    collectionURI: String,
    items: [
      {
        resourceURI: String,
        name: String,
      },
    ],
    returned: Number,
  },
  stories: {
    available: Number,
    collectionURI: String,
    items: [
      {
        resourceURI: String,
        name: String,
      },
    ],
    returned: Number,
  },
  events: {
    available: Number,
    collectionURI: String,
    items: [
      {
        resourceURI: String,
        name: String,
      },
    ],
    returned: Number,
  },
  urls: [
    {
      type:{type:String},
      uri: String,
    },
  ],
}, { typeKey: '$type' });

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
