import axios from "axios";
import base_url from "./baseurl";

export const getproducts=async()=>{
    return await axios.get(`${base_url}/product`);
}

export const getProductById = async (id) => {
  return await axios.get(`${base_url}/product/${id}`);
}

export const addtoCart =  async(data) => {
  return await axios.post(`${base_url}/cart`,data);
} 

export const getcartdata=async()=>{
    return await axios.get(`${base_url}/cart`);
}

export const deletecard=async(id)=>{
  return await axios.delete(`${base_url}/cart/${id}`);

}