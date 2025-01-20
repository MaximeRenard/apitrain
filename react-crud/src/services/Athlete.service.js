import http from "../http-common";
  
class AthletesDataService{
  // Retrieve a single Athletes with id
  getid(id) {
    return http.get(`/Athletes/view/${id}`);
  }
  // Create data
  create(data) {
    return http.post("/Athletes/create", data);
  }
  // Get all athlete
  getAll() {
    return http.get("/Athletes/view");
  }
   // delete all athlete
  deleteAll() {
    return http.delete("/Athletes/delete");
  } 
  // Delete a single athlete with id
  delete(id) {
    return http.delete(`/Athletes/delete/${id}`);
  }
  //update category
  update(id,data) {
    return http.put(`/Athletes/update/${id}`,data);
  }

}  

/*
  // Retrieve all Athletes of city
  router.get("/city", athletes.findAllCity);
*/

export default new AthletesDataService();