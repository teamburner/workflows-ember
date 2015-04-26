module.exports = function(app) {
  var express = require('express');
  var playersRouter = express.Router();

  var players = [
    { id: Date.now(),
      name: "Jill Francis" },
    { id: Date.now() + 1,
      name: "Samantha B" },
  ]

  playersRouter.get('/', function(req, res) {
    res.send({
      'players': players
    });
  });

  playersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  playersRouter.get('/:id', function(req, res) {
    res.send({
      'players': {
        id: req.params.id
      }
    });
  });

  playersRouter.put('/:id', function(req, res) {
    res.send({
      'players': {
        id: req.params.id
      }
    });
  });

  playersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/players', playersRouter);
};
