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
  },
  getYelpLocations: function(query, query2) {
    return axios.get("/hello", {  params: {location:query, term: query2 }} );
  },
    // Gets all articles
    getLocations: function() {
      return axios.get("/bookmarks");
    },
    // Gets the bookmark with the given id
    getLocation: function(id) {
      console.log(id);
      return axios.get("/bookmarks/" + id);
    },
    // Deletes the book with the given id
    deleteLocation: function(id) {
      return axios.delete("/bookmarks/" + id);
    },
    // Saves a book to the database
    saveLocation: function(bookData) {
      console.log("RECORD SAVED --> ", bookData)
      return axios.post("/bookmarks", bookData);
    }
};

