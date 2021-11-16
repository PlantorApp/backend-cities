import {
  addNewCity,
  getCities,
  getCityByID,
  updateCity,
  deleteCity,
} from "../controllers/cityController.js";

const routes = (app) => {
  app
    .route("/cities")
    .get((req, res, next) => {
      // Middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getCities)
    // This is a post endpoint
    .post(addNewCity);

  // try {
  app
    .route("/cities/:sub")
    // Get a specific city
    .get(getCityByID)
    // Update a specific city
    .put(updateCity)
    // Delete a specific city
    .delete(deleteCity);

  app.route("/*").get((req, res) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    res.send(`You try to ${req.method} from ${req.originalUrl}.`);
  });
};

export default routes;
