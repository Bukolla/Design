import axios from "axios";

const url = "https://api.storerestapi.com/products"
export const getstore = async () => {
  try {
    return await axios.get(url).then((res) => {
      console.log("Get Data: ", res.data.data)
    return res.data.data
    });
  } catch (error) {
    console.log(error)
  }
}