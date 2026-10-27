import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //domain url
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGI4NDg2YWFhZTA3YmZkYzg0OTcyOTY3MThmMjI0YyIsIm5iZiI6MTczMTMyNTkxMC4yMjMsInN1YiI6IjY3MzFlZmQ2NGNlZTRmYzhkNWQxOGE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YgFQPLwjKohN3vUBM-ttZD44Ne5a_8rzl_nc7Qj6G3Y",
  },
});


export default instance;
