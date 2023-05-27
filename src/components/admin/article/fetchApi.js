import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const createCategory = async ({
    cName,
    cImage,
    cDescription,
    cStatus,
  }) => {
    let formData = new FormData();
    formData.append("cDescription", cDescription);
    formData.append("cStatus", cStatus);
  
    try {
      let res = await axios.post(
        `${apiURL}/api/category/add-category`,
        formData,
        Headers()
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };