import React from "react";
import { Fragment } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

function TopNavbar({ children }) {
    const { user } = useAuth();
    const navigate = useNavigate();

    const LogoutHandler = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <Fragment>
            <div className="d-block d-sm-flex justify-content-between py-4 px-3 px-lg-5 position-relative">
                <h3 className="my-auto mb-3 d-none d-sm-block fw-semiBold">
                    MY COURSE
                </h3>
                <div className="d-flex justify-content-end">
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
                                {user.name}
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
                            <a
                                className="dropdown-item"
                                onClick={LogoutHandler}
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
                <h3 className="my-auto mt-3 mt-sm-0 d-sm-none d-block">
                    MY COURSE
                </h3>
            </div>
            <main id="App">{children}</main>
        </Fragment>
    );
}

export default TopNavbar;
