import { Outlet } from "react-router-dom";
// this is my main layout use for my private routes 
const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
