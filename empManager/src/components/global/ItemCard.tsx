import { Link } from "react-router-dom";
import { deletEmp } from "../../API/employeesAPI";

interface ItemCardData {
  id: number;
  image: string;
  name: string;
  Role: string;
  refreshListHandler: () => void;
}

const ItemCard: React.FC<ItemCardData> = ({
  id,
  image,
  name,
  Role,
  refreshListHandler,
}) => {
  const empDeletehandler = (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete ?");
    if (confirmDelete) {
      deletEmp(id).then((res) => {
        console.log(res);
        refreshListHandler();
      });
    }
  };

  return (
    <div className="card mb-3 h-full border-dark border-3">
      <div className="d-flex justify-content-center align-items-center w-100">
        <img height="250px" width="250px" src={image} alt={name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Role:</strong> {Role}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-end pb-3 pt-3">
        <button
          className="me-3 btn btn-danger border-white"
          onClick={() => empDeletehandler(id)}
        >
          Delete
        </button>
        <Link to={`/EmployeeList/${id}`} className="btn btn-dark border-white">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
