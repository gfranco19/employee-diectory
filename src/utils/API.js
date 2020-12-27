 import axios from "axios";

export const getEmployees = function() {
  return axios.get("https://randomuser.me/api/?results=8&nat=us");
};