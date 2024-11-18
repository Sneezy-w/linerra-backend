export default {
  base: '/api',
  dicts: {
    base: '/dicts',
    get: '/getDicts',
  },
  users: {
    base: '/users',
    get: '/all',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
  },
};
