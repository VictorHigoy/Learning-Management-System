import SideNavbar from "./SideNavbar";
import TopNavbar from "./TopNavbar";
import Footer from "../../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main>
            <div className="d-block d-lg-flex" id="app">
                <div className="sideBar">
                    <SideNavbar />
                </div>
                <div className="mainContent bg-light" id="app">
                    <TopNavbar>
                        <main className="p-5">
                            <Outlet />
                        </main>
                    </TopNavbar>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Layout;
