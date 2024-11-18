import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
