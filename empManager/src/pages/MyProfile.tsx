import React, { useEffect, useState } from "react";
import { orgDetails } from "../Types/type";
import { getOrganizationData } from "../API/organizationAPI";
import Loader from "../components/global/Loader";

export default function MyProfile() {
  const [orgData, setOrgData] = useState<orgDetails>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getData = () => {
    setIsLoading(true);
    getOrganizationData()
      .then((res) => {
        console.log(res.data.data);
        const data = res.data.data;
        setIsLoading(false);
        setOrgData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        setError(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : orgData ? (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">
                Organization Profile
              </h5>
              <p className="card-text">
                <strong>Organization Name:</strong> {orgData.name}
              </p>
              <p className="card-text">
                <strong>Address:</strong> {orgData.address}
              </p>
              <p className="card-text">
                <strong>Phone Number:</strong> {orgData.phoneNumber}
              </p>
              <p className="card-text">
                <strong>Headquarter:</strong> {orgData.headquarter}
              </p>
              <p className="card-text">
                <strong>Founder:</strong> {orgData.founder}
              </p>
              <p className="card-text">
                <strong>Date:</strong> {orgData.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    error && (
      <div className="text-center">
        <h2>No data found</h2>
      </div>
    )
  );
}
