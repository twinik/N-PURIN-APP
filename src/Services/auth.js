import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com/";

// Passing configuration object to axios
export const fetchUser = async () => {
  const configurationObject = {
    method: "get",
    url: `${baseURL}/api/users/1`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};
