import axios from "axios";
// import empDetailsData, { orgDetails } from "../Types/type";

const getEmpList = () => {
  return axios.get("http://localhost:8000/employees");
};

const deletEmp = (id: number) => {
  return axios.delete(`http://localhost:8000/employees/${id}`);
};

const getEmpDataById = (id: number) => {
  return axios.get(`http://localhost:8000/employees/${id}`);
};

const editEmpDataById = (id: number, data: any) => {
  return axios.put(`http://localhost:8000/employees/${id}`, {
    name: data.name,
    address: data.address,
    DOB: data.DOB,
    role: data.role,
    isActive: data.isActive,
  });
};

export { getEmpList, deletEmp, getEmpDataById, editEmpDataById };
