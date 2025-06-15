import { ServerRoute } from "@hapi/hapi";
const handlers = require('./handler');

const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = handlers;

const routes: ServerRoute[] = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

export default routes;