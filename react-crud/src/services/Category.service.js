import http from "../http-common";
  
class CategoryDataService{
   // Retrieve a single Tutorial with id
  getid(id) {
    return http.get(`/Category/view/${id}`);
  }
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
  // Delete a single category with id
  delete(id) {
    return http.delete(`/Category/delete/${id}`);
  }


}



export default new CategoryDataService();