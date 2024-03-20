import axios from "axios";
import {baseUrl} from "../setup"
export const getVehicle = async (formData) =>{
    const response = await axios.get(`${baseUrl}/booking`, formData);
    return response.data 
}