const mongoose = require("mongoose")

const DeckSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    valor:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    palo: {
        type:String,
        required:true
    }
}, {collection:'deck'})

//CREAR EL MODELO A PARTIR DEL ESQUEMA DEFINIDO

module.exports = mongoose.model('deck', DeckSchema)