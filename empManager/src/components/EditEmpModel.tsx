import React, { useState } from "react";
import { empDetailsData } from "../Types/type";
import { editEmpDataById } from "../API/employeesAPI";

const EditEmpModel: React.FC<empDetailsData> = (data: empDetailsData) => {
  const [newData, setNewData] = useState<empDetailsData>(data);

  // edit functiinality
  const onEdit = (id: number) => {
    editEmpDataById(id, {
      name: newData.name,
      address: newData.address,
      DOB: newData.DOB,
      role: newData.role,
      isActive: true,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className="modal fade"
      id={`editModal${data.id}`}
      tabIndex={-1}
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">
              Edit Employee Detail
            </h5>
          </div>
          <div className="modal-body">
            {/* employee name */}
            <div className="form-group d-flex my-3">
              <label htmlFor="name" className="mx-2 align-content-center">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={newData.name}
                onChange={(e) =>
                  setNewData({ ...newData, name: e.target.value })
                }
                defaultValue={data.name}
              />
            </div>

            {/* employee address */}
            <div className="form-group d-flex my-3">
              <label htmlFor="address" className="mx-2 align-content-center">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={newData.address}
                onChange={(e) =>
                  setNewData({ ...newData, address: e.target.value })
                }
                defaultValue={data.address}
              />
            </div>

            {/* employee Role */}
            <div className="form-group d-flex my-3">
              <label htmlFor="Role" className="mx-2 align-content-center">
                Role
              </label>
              <input
                type="text"
                className="form-control"
                id="Role"
                value={newData.role}
                onChange={(e) =>
                  setNewData({ ...newData, role: e.target.value })
                }
                defaultValue={data.role}
              />
            </div>

            {/* employee DOB */}
            <div className="form-group d-flex my-3">
              <label
                htmlFor="phoneNumber"
                className="mx-2 align-content-center"
              >
                Date of Birth
              </label>
              <input
                type="text"
                className="form-control"
                id="Date of Birth"
                value={newData.DOB}
                onChange={(e) =>
                  setNewData({ ...newData, DOB: e.target.value })
                }
                defaultValue={data.DOB}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => onEdit(data.id)}
            >
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmpModel;
