import axios from "../axios";

const handleUserLoginApi = (email, password) => {
    console.log('1213123');
  return axios.post("/login", { username: email, password });
};
const handleUserRegisterApi = (name, email, password) => {
  return axios.post("/register", {
    name,
    email,
    password,
  });
};
export { handleUserLoginApi, handleUserRegisterApi };
