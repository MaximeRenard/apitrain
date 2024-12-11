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
  // Get all athlete
  deleteAll() {
    return http.delete("/Category/deleteall");
  }  
}



export default new CategoryDataService();