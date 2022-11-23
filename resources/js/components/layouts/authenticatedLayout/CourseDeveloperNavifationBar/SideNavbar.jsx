import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
    const pathName = useLocation().pathname;

    console.log(pathName);

    return (
        <div className="navbar navbar-expand-lg navbar-light py-2 py-lg-4 ps-3 ps-lg-4 pe-3 pe-lg-0 parentNavbar">
            <div className="container-fluid p-0 d-lg-block">
                <div className="d-flex align-items-center mb-lg-5">
                    <img
                        className="sideNavarLogo me-2"
                        src="/images/newLogin/logo.png"
                        alt="bcp-logo"
                    />
                    <h3 className="py-3 mb-0 fw-bold">BESTLINK</h3>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse my-3 my-lg-0"
                    id="navbarNavAltMarkup"
                >
                    <ul className="list-unstyled text-secondary text-decoration-none">
                        <Link
                            to="/developer/home"
                            className="text-decoration-none text-dark"
                        >
                            <li
                                className={`fs-6 fw-semibold mb-2 SideNavbarItem ${
                                    pathName === "/developer/home"
                                        ? "activeSideNavbarItem"
                                        : ""
                                }`}
                            >
                                <i className="bi bi-clipboard-data-fill fs-6 me-1 px-2 py-1 bg-light rounded"></i>
                                Dashboard
                            </li>
                        </Link>
                        <Link
                            to="/developer/createModules"
                            className="text-decoration-none text-dark"
                        >
                            <li
                                className={`fs-6 fw-semibold mb-2 SideNavbarItem ${
                                    pathName === "/developer/createModules"
                                        ? "activeSideNavbarItem"
                                        : ""
                                }`}
                            >
                                <i className="bi bi-calendar-check-fill fs-6 me-1 px-2 py-1 bg-light rounded"></i>
                                Learning Materials
                            </li>
                        </Link>

                        <Link
                            to="/developer/settings"
                            className="text-decoration-none text-dark"
                        >
                            <li
                                className={`fs-6 fw-semibold mb-2 SideNavbarItem ${
                                    pathName === "/developer/setting"
                                        ? "activeSideNavbarItem"
                                        : ""
                                }`}
                            >
                                <i className="bi bi-sliders fs-6 me-1 px-2 py-1 bg-light rounded"></i>
                                Setting
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
