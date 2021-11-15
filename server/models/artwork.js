const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    artworkTitle : {
        type : String,
        required : true,
        maxlength : 120
    },
    description : {
        type : String,
        maxlength : 2000
    },
    dateCreated : {
        type : Date,
        default : Date.now()
    },
    thumbnailURL : {
        type : String,
        // required : "true",
    },
    artworkImages : [String],
    ownedBy : {
        type : String,
        required : true
    },
    // isPublished : {
    //     type : Boolean,
    //     default : false
    // },
    artworkId : {
        type : String,
        unique : true,
        required : true
    }
});

const artworkModel = mongoose.model('Artwork' , schema);

module.exports = artworkModel;