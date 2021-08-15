const { get } = require('http');
const { count } = require('../models/vote.model.js');
const Vote = require('../models/vote.model.js');
const mongoose = require('mongoose');
const { redirect } = require('statuses');
const db = mongoose.connection;

// Created a new Vote
exports.create = (req, res) => {
    //Validate request
    if(req.body.id !== 'f17bc320-5546-47df-ab44-ab4bfe6470f0' && req.body.id !== '93aa59ea-8116-4355-94b9-dedfe0564ef2'){
        return res.status(404).send({ 
            id: req.body.id,
            message: 'Not found'
        });
    }

    // Create a Vote
    const vote = new Vote({
        id: req.body.id
    });
    
    // Save Vote in the database
    vote.save()
    .then( async data => {
        const voteJSON = {id: data.id, count: await db.collection('votes').find({id:data.id}).count()}
        res.status(200).send(voteJSON);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the Vote.'
        });
    });
};

// Find all Votes of the participants
exports.find = (req, res) => {
    Vote.find({id: req.query.id})
    .then(data => {
        res.send({
            id: req.query.id,
            count: data.length
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving Votes this ID.'
        });
    });
};


