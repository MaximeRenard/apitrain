import http from "../http-common";
  
class AthletesDataService{
  // get Id
  get(id) {
    return http.get(`/Athletes/${id}`);
  }
  // Create data
  create(data) {
    return http.post("/Athletes/create/", data);
  }
  getAll() {
    return http.get("/Athletes/view/");
  }

}  
/*
  // Retrieve all Athletes of city
  router.get("/city", athletes.findAllCity);

  // Retrieve all Athletes of city
  router.get("/Category", athletes.findAllCategory);

  // Retrieve a single Tutorial with id
  router.get("/view/:id", athletes.findOne);

  // Update a Tutorial with id
  router.put("/update/:id", athletes.update);

  // Delete a Tutorial with id
  router.delete("/delete/:id", athletes.delete);

  // Delete all Athletes
  router.delete("/delete", athletes.deleteAll);
*/

export default new AthletesDataService();