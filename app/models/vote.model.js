const mongoose = require('mongoose');

const VoteSchema = mongoose.Schema({
    //id do participante
    id: String,
}, {
    // Creates automatic date and time fields 
    timestamps: true
});

module.exports = mongoose.model('vote', VoteSchema);