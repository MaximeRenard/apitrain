import http from "../http-common";
  
class CategoryDataService{

  // Create data
  create(data) {
    return http.post("/Category/create", data);
  }
  // Get all athlete
  AllCategory() {
    return http.get("/Category/view");
  }

}  

/*
  // Create a new Tutorial
  router.post("/create", category.create);
  // View category
  router.get("/view", category.AllCategory);

  app.use('/api/Category', router);
*/

export default new CategoryDataService();