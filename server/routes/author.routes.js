const Controller = require('../controllers/author.controller');

module.exports = app => {
  app.get('/api/authors', Controller.index);
  app.post('/api/authors/new', Controller.createAuthor);
  app.get('/api/authors/:id', Controller.oneAuthor);
  app.put('/api/authors/:id/edit', Controller.updateAuthor);
  app.delete('/api/authors/:id/delete', Controller.deleteAuthor);
}