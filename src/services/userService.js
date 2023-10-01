import axios from "../axios";

/* đăng ký */

const handleUserLoginApi = (email, password) => {
  return axios.post("/login", { username: email, password });
};

const handleUserRegisterApi = (name, email, password, date, number, gender, address) => {
  return axios.post("/register", {
    name,
    email,
    password,
    date,
    number,
    gender,
    address,
  });
};

/* thay đổi thông tin */
const handleUpdateInfor = (name, email, number, date, gender, address) => {
  return axios.patch("/update-userInfo", { fullname: name, email, number, dob: date, gender, address });
};

const handleGetAllWord = async () => {
  return await axios.get("/wordNew");
};

const handleUpdateWord = async ({viet, tay, dokho, dacdiem}) => {
  return await axios.post("/update-word", { viet, tay, dokho, dacdiem });
};

export { handleUserLoginApi, handleUserRegisterApi, handleUpdateInfor, handleGetAllWord, handleUpdateWord };
