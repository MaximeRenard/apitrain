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
  // delete all category 
  deleteAll() {
    return http.delete("/Category/delete");
  } 
  // Delete a single category with id
  delete(id) {
    return http.delete(`/Category/delete/${id}`);
  }
  //update category
  update(id,data) {
    return http.put(`/Category/update/${id}`,data);
  }



}

export default new CategoryDataService();