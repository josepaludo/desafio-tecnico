import axios from "axios"
import { API_URL } from "./api"


export const axiosClient = axios.create({
    baseURL: API_URL
})