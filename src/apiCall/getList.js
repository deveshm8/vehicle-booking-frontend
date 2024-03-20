import axios from "axios";
import {baseUrl} from "../setup"
export const getVehicle = async (wheel) =>{
    const response = await axios.get(`${baseUrl}/vehicle?wheel=${wheel}`);
    return response.data 
}
