import { Outlet } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import TopNavbar from "./TopNavbar";

const Layout = () => {
  return (
    <main className="d-block d-lg-flex" id="app">
      <div className="sideBar">
        <SideNavbar />
      </div>
      <div className="mainContent bg-light" id="app">
        <TopNavbar>
          <Outlet />
        </TopNavbar>
      </div>
    </main>
  );
};

export default Layout;
