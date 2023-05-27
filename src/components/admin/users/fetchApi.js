import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;


export const getAllUser = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/user/all-user`);
    return res.data ;
  } catch (error) {
    console.log(error);
  }
};


export const deleteUser = async (oId) => {
  let data = { oId: oId };
  try {
    let res = await axios.post(`${apiURL}/api/user/delete-user`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
