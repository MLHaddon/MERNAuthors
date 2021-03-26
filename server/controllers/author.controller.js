const { Author } = require('../models/author.model');

module.exports.index = (req, res) => {
  Author.find({})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err));
}

module.exports.createAuthor = (req, res) => {
  const {firstName, lastName} = req.body;
  Author.create({
    firstName,
    lastName
  })
    .then(newAuthor => res.json(newAuthor))
    .catch(err => res.status(400).json(err));
}

module.exports.oneAuthor = (req, res) => {
  Author.findOne({_id: req.params.id})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err));
}

module.exports.updateAuthor = (req, res) => {
  const author = req.body;
  if (author)
  Author.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err));
}

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({_id: req.params.id})
    .then(confirm => res.json(confirm))
    .catch(err => res.status(400).json(err));
}