import http from "../http-common";
import axios from "axios";

const USER_BASE_API_URL = "http://localhost:8080/api/v1/Users";
const MATCHES_BASE_API_URL = "http://localhost:8080/api/v1/Matches";
class DataService{
    create(data){
        return http.post("/users", data);
    }
    getUser() {
        return axios.get(USER_BASE_API_URL);
      }
    getMatches() {
        return axios.get(MATCHES_BASE_API_URL); 
    }
    getSpecificUser(name) {
        return axios.get("/api/Users/{name}", name);
    }
    
}
export default new DataService;