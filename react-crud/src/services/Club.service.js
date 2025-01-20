import http from "../http-common";
  
class ClubDataService{

  // Create data
  create(data) {
    return http.post("/Clubs/create", data);
  }
  // Get all athlete
  viewclub() {
    return http.get("/Clubs/view");
  }
  // delete all Club
  deleteAll() {
    return http.delete("/Clubs/delete");
  } 
  // Delete a single club with id
  delete(id) {
    return http.delete(`/Clubs/delete/${id}`);
  }


}  

export default new ClubDataService();
