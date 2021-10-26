
import axios from "axios";

const baseURL = "https://randomuser.me/api";
const fetchUser = (pageNumber) => {
    return axios.get(`${baseURL}?page=${pageNumber}`)
        .then(response => {
            console.log(response.data.results);
            return response.data.results;
        }).catch(err => {
            console.log(err);
        })
}

export default fetchUser
