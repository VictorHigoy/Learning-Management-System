import React from "react";
import { Fragment } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

function TopNavbar({ children }) {
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    const LogoutHandler = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <Fragment>
            <div className="d-block d-sm-flex justify-content-between shadow-sm py-2 px-3 px-lg-5  position-relative">
                <div className="topNavbarSearch my-auto d-none d-sm-block pe-3">
                    <div className="input-group align-middle">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search courses...."
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-outline-dark bg-secondary text-light"
                            type="button"
                            id="button-addon2"
                        >
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-end">
                    <i className="bi bi-bell-fill fs-5 m-sm-auto my-2 me-3 me-sm-5 bellIcon align-middle"></i>
                    <div className="dropdown">
                        <a
                            id="dropdownmenu"
                            className="nav-link d-flex"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <h4 className="my-auto me-3 dropdown-toggle">
                                {userInfo.name}
                            </h4>
                            <img
                                src="/images/man.png"
                                className="img-fluid"
                                alt="profile Pic"
                                height="66"
                                width="66"
                            />
                        </a>

                        <div
                            className="dropdown-menu p-0"
                            aria-labelledby="dropdownmenu"
                        >
                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={LogoutHandler}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
                <div className="topNavbarSearch my-auto mt-3 mt-sm-0 d-sm-none d-block">
                    <div className="input-group align-middle">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search courses...."
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-outline-dark bg-secondary text-light searchIcon"
                            type="button"
                            id="button-addon2"
                        >
                            <i className="bi bi-search searchIcon"></i>
                        </button>
                    </div>
                </div>
            </div>
            <main id="App">{children}</main>
        </Fragment>
    );
}

export default TopNavbar;
