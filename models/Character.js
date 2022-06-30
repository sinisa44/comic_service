const mongoose = require('mongoose');
const validator = require('validator');

const CharacterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    }
});


const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;