import { useEffect, useState } from "react";
import ItemCard from "../components/global/ItemCard";
import SectionHeader from "../components/global/SectionHeader";
import Loader from "../components/global/Loader";
import { empDetailsData } from "../Types/type";
// import empdata from "../assets/empdata";
import { getEmpList } from "../API/employeesAPI";

export default function EmployeeList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [empList, setEmpList] = useState<empDetailsData[] | []>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredList, setFilteredList] = useState<empDetailsData[] | []>([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const tempList = empList.filter((empData: empDetailsData) =>
        empData.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList([...tempList]);
    } else {
      setFilteredList([...empList]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const getData = () => {
    getEmpList()
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        setIsLoading(false);
        setIsError(false);
        if (data) {
          setEmpList([...data]);
          setFilteredList([...data]);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        if (error) {
          setIsError(true);
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(empList);
  }, [empList]);

  return (
    <>
      <SectionHeader title="Employee Details" />
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e?.target?.value);
          }}
          className="form-control"
          placeholder="Search here.."
          aria-label="Search here..."
          aria-describedby="button-addon2"
        />
        <button className="btn btn-dark" type="button" id="button-addon2">
          Search
        </button>
      </div>
      <div className="row mt-4">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>
            <h4 className="text-center text-muted">No data found!</h4>
          </div>
        ) : filteredList.length > 0 ? (
          filteredList.map((emp: empDetailsData) => (
            <div className="col-md-6" key={emp.id}>
              <ItemCard
                key={emp.id}
                id={emp.id}
                image={
                  "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                }
                name={emp.name}
                Role={emp.role}
                refreshListHandler={getData}
              />
            </div>
          ))
        ) : (
          <div>
            <h4 className="text-center text-muted">No data found!</h4>
          </div>
        )}
      </div>
    </>
  );
}
