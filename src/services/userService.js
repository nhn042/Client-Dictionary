import axios from "../axios";

import axioss from "axios";

export const axiosJWT = axioss.create();

const handleUserLoginApi = (email, password) => {
  return axios.post("/login", { username: email, password });
};

const handleUserRegisterApi = (
  name,
  email,
  password,
  date,
  number,
  gender,
  address
) => {
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
  console.log(name, email, number, date, gender, address);
  return axios.patch("/update-userInfo", {
    fullname: name,
    email,
    number,
    dob: date,
    gender,
    address,
  });
};

const handleGetAllWord = async (email) => {
  return await axios.get(`/wordNew?query=${email}`);
};

const getDetailsUser = async (id, access_token) => {
  const res = await axios.get(`/get-details/${id}`);
  return res;
};

const handleGetAllUser = async () => {
  return await axios.get("/getAll");
};

const handleFindWord = async (category, word) => {
  return await axios.get(`/find/${category}?query=${word}`);
};

const handleUpdateWord = async ({ viet, tay, dokho, dacdiem, emailUser }) => {
  return await axios.post("/update-word", { viet, tay, dokho, dacdiem, emailUser });
};

const handleChangePass = async (id, password) => {
  return await axios.patch("/change-password", { id, password });
};

const handleDeleteWord = async ({ viet }) => {
  return await axios.delete(`/delete/word?query=${viet}`);
};

const getAllWordDictionary = async () => {
  return await axios.get("/find/getAll");
};

const forgetPassword = async (email) => {
  return await axios.get(`/forgot-password?query=${email}`);
};

const changePassword = async (email, code, password) => {
  return await axios.patch("/change-password", { email, code, password });
};

export {
  getDetailsUser,
  handleGetAllUser,
  handleUserLoginApi,
  handleUserRegisterApi,
  handleUpdateInfor,
  handleGetAllWord,
  handleUpdateWord,
  getAllWordDictionary,
  handleFindWord,
  handleDeleteWord,
  handleChangePass,
  changePassword,
  forgetPassword,
};
