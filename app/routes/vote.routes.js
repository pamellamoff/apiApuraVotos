module.exports = (app) => {
    const vote = require('../controllers/vote.controller.js');

    // Create a new Vote
    app.post('/vote', vote.create);

    // Recover amount of Votes
    app.get('/count', vote.find);
}