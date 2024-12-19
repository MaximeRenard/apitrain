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

}  

export default new ClubDataService();
