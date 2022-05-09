import http from "../http-common";
import axios from "axios";

const USER_BASE_API_URL = "http://localhost:8080/api/v1/vendors";
class DataService{
    create(data){
        return http.post("/users", data);
    }
    // getVendor() {
    //     return axios.get(EMPLOYEE_BASE_API_URL);
    //   }
}
export default new DataService;