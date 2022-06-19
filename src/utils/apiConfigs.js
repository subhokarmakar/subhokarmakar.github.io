import axios from "axios"

const token = sessionStorage.getItem("token")

export const authAxios = axios.create({
  baseURL: process.env.REACT_APP_API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})

export const authAxios2 = axios.create({
  baseURL: process.env.REACT_APP_API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})

export const openAxios = axios.create({
  baseURL: process.env.REACT_APP_API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
})

export const publicAxios = axios.create({
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
})
