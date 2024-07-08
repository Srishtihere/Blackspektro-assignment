import AppHeader from "../components/layout/AppHeader";
import AppFooter from "../components/layout/AppFooter";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <AppHeader />
      <div className="container py-4 mb-5 mt-5">
        <Outlet />
      </div>
      <AppFooter />
    </>
  );
};

export default Root;
