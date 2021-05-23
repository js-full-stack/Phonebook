const getIsAuthenticated = state => state.auth.token;

const getUsername = state => state.auth.user.name;

const getisLoading = state => state.auth.loading;

// eslint-disable-next-line
export default {
  getIsAuthenticated,
  getUsername,
  getisLoading,
};
