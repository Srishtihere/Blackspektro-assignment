import axios from "axios";
import { orgDetails } from "../Types/type";

const getOrganizationData = () => {
  return axios.get(`http://localhost:8000/organization`);
};

const editOrganizationData = (data: orgDetails) => {
  return axios.put(`http://localhost:8000/organization`, {
    name: data.name,
    address: data.address,
    phoneNumber: data.phoneNumber,
    headquarter: data.headquarter,
    founder: data.founder,
    date: data.date,
  });
};

export { getOrganizationData, editOrganizationData };
