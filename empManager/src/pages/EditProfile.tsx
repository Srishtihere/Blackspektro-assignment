import React, { useEffect, useState } from "react";
import { orgDetails } from "../Types/type";
import {
  editOrganizationData,
  getOrganizationData,
} from "../API/organizationAPI";

export default function EditProfile() {
  const [organization, setOrganization] = useState<orgDetails>({
    name: "",
    phoneNumber: "",
    address: "",
    founder: "",
    headquarter: "",
    date: "",
  });

  useEffect(() => {
    getOrganizationData()
      .then((res) => {
        console.log(res.data.data);
        const data = res.data.data;
        setOrganization(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setOrganization((prevOrg: orgDetails) => ({
      ...prevOrg,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    editOrganizationData(organization)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
    alert("organization details updated !");
  };

  return (
    <div className="container my-5 d-flex flex-column justify-content-center align-items-center w-100">
      <h2>Edit Organization Details</h2>
      <form className="w-100">
        {/* org name */}
        <div className="mb-3 d-flex">
          <label className="form-label mx-2 align-content-center fw-bold">
            Name:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={organization.name}
            onChange={handleChange}
          />
        </div>
        {/* org address */}
        <div className="mb-3 d-flex">
          <label className="form-label mx-2 align-content-center fw-bold">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={organization.address}
            onChange={handleChange}
          />
        </div>
        {/* org contact */}
        <div className="mb-3 d-flex">
          <label className="form-label mx-2 align-content-center fw-bold">
            Phone Number:
          </label>
          <input
            type="text"
            className="form-control"
            name="phoneNumber"
            value={organization.phoneNumber}
            onChange={handleChange}
          />
        </div>
        {/* org headquarter */}
        <div className="mb-3 d-flex">
          <label className="form-label mx-2 align-content-center fw-bold">
            Headquarter:
          </label>
          <input
            type="text"
            className="form-control"
            name="headquarter"
            value={organization.headquarter}
            onChange={handleChange}
          />
        </div>
        {/* org founder */}
        <div className="mb-3 d-flex">
          <label className="form-label mx-2 align-content-center fw-bold">
            Founder:
          </label>
          <input
            type="text"
            className="form-control"
            name="founder"
            value={organization.founder}
            onChange={handleChange}
          />
        </div>
        {/* org founding date */}
        <div className="mb-3 d-flex">
          <label className="form-label mx-2 align-content-center fw-bold">
            Foundation Date:
          </label>
          <input
            type="text"
            className="form-control"
            name="date"
            value={organization.date}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-success"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
