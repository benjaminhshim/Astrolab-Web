import axios from "axios";

export default {
  // Gets all articles
  getUser: function() {
    return axios.get('/api/users');
  },
  logInUser: function(username, password) {
    return axios.get('/api/users/login');
  },
  create: function(userData) {
    return axios.post("/api/users", userData);
  },
  searchYelp: function() {
    return axios.get('/')
  }
};
