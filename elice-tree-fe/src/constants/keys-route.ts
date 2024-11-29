export const KEYS_ROUTE = {
  BASE: '/',
  LANDING() {
    return this.BASE + 'landing';
  },
  TODOS() {
    return this.BASE + 'todos';
  },
  SIGNIN() {
    return this.BASE + 'signin';
  },
  SIGNUP() {
    return this.BASE + 'signup';
  },
  NOT_FOUND() {
    return this.BASE + '404';
  },
  WILDCARD: '*',
};
