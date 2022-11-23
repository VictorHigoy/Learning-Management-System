import React from "react";
import LoginFooter from "../layouts/LoginFooter";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

function Login() {
    const { user } = useAuth();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [type, setType] = useState("Student");
    const [error1, setError] = useState();
    let error;

    console.log(type);

    const results = localStorage.getItem("error-info");
    if (results) {
        error = JSON.parse(results);
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        let item = { email, password, type };
        const fetchedData = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(item),
        });
        console.log(fetchedData);
        const result = await fetchedData.json();
        if (result.user !== undefined && result.token !== undefined) {
            localStorage.setItem("user-info", JSON.stringify(result.user));
            localStorage.setItem("type", JSON.stringify(result.type));
            localStorage.setItem("token", JSON.stringify(result.token));
        } else {
            localStorage.setItem(
                "error-info",
                JSON.stringify("Email or Password is not matched")
            );
        }

        console.log(result);
        window.location.reload();
    };

    return (
        <div className="loginContainer">
            <div className="d-lg-flex position-relative">
                <div className="d-flex">
                    <div className="polygon1 position-relative">
                        <img
                            className="logo"
                            src="/images/newLogin/logo.png"
                            alt="bcp-logo"
                        />
                    </div>
                    <div className="polygon2"></div>
                </div>
                <div className="form-container d-flex justify-content-center w-100 p-3 p-lg-5">
                    <div className="m-auto">
                        <div className="form-header1 ps-2 mb-4">
                            <h1 className="header1 fw-bold fs-1">BCP</h1>
                            <h1 className="header2 fw-bold fs-1">
                                LEARNING MANAGEMENT
                            </h1>
                        </div>
                        <form onSubmit={SubmitHandler}>
                            <label
                                htmlFor="dropdown"
                                className="fw-semibold fs-5"
                            >
                                Dashboard:
                            </label>
                            <div id="dropdown" className="dropdown">
                                <button
                                    className="dropdownMenu py-3 px-4 fs-4 fw-semibold btn btn-light dropdown-toggle w-100 d-flex justify-content-between align-items-center dropDownBorder"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {type}
                                </button>
                                <ul className="dropdownMenu dropdown-menu w-100">
                                    <li>
                                        <button
                                            value="Student"
                                            type="button"
                                            className={`dropdown-item`}
                                            onClick={(e) => {
                                                setType(e.target.value);
                                            }}
                                        >
                                            Student
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            value="Teacher"
                                            type="button"
                                            className={`dropdown-item`}
                                            onClick={(e) => {
                                                setType(e.target.value);
                                            }}
                                        >
                                            Teacher
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            value="Admin"
                                            type="button"
                                            className={`dropdown-item`}
                                            onClick={(e) => {
                                                setType(e.target.value);
                                            }}
                                        >
                                            Admin
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            value="CourseDeveloper"
                                            type="button"
                                            className={`dropdown-item`}
                                            onClick={(e) => {
                                                setType(e.target.value);
                                            }}
                                        >
                                            Course Developer
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <span className="lineBreak my-4" />
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label fw-semibold fs-5"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`input-form form-control py-3 px-4 fs-5 fw-semibold ${
                                        error ? "errorBorderColor" : ""
                                    }`}
                                    placeholder="s190xxxxx"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label fw-semibold fs-5"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={`input-form form-control py-3 px-4 fs-5 fw-semibold ${
                                        error ? "errorBorderColor" : ""
                                    }`}
                                    placeholder="********"
                                    id="exampleInputPassword1"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <p className="text-danger">{error && error}</p>
                            </div>
                            <button
                                type="submit"
                                className="sumbit-button btn btn-primary w-100 py-2 px-4 fs-4"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <LoginFooter />
        </div>
    );
}

export default Login;
