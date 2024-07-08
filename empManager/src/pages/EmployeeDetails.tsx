import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/global/Loader";
import { empDetailsData } from "../Types/type";
// import empdata from "../assets/empdata";
import { getEmpDataById } from "../API/employeesAPI";
import EditEmpModel from "../components/EditEmpModel";

export default function EmployeeDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<empDetailsData>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    getEmpData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getEmpData = () => {
    getEmpDataById(Number(id))
      .then((res) => {
        console.log(res.data.data);
        const { data } = res.data;
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        setError(error);
      });
  };

  return isLoading ? (
    <Loader />
  ) : data ? (
    <>
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={
                    "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                  }
                  alt={data.name}
                  className="img-fluid rounded-circle"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <h4 className="card-title">{data.name}</h4>
                <p className="card-text">
                  <strong>ID:</strong> {data.id}
                </p>
                <p className="card-text">
                  <strong>Role:</strong> {data.role}
                </p>
                <p className="card-text">
                  <strong>Address:</strong> {data.address}
                </p>
                <p className="card-text">
                  <strong>Date of Birth:</strong> {data.DOB}
                </p>
                <button
                  type="button"
                  className="btn btn-success mr-2"
                  data-bs-toggle="modal"
                  data-bs-target={`#editModal${data.id}`}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditEmpModel data={data} getData={getEmpData} />
    </>
  ) : (
    error && (
      <div className="text-center">
        <h2>No data found</h2>
      </div>
    )
  );
}
