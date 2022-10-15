import React from "react";
import Footer from "../layouts/Footer";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

function Login() {
    const { user } = useAuth();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error1, setError] = useState();
    let error;

    const results = localStorage.getItem("error-info");
    if (results) {
        error = JSON.parse(results);
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        let item = { email, password };
        const fetchedData = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(item),
        });
        const result = await fetchedData.json();
        if (result.user !== undefined && result.token !== undefined) {
            localStorage.setItem("user-info", JSON.stringify(result.user));
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
        <div>
            <div className="d-block d-lg-flex justify-content-center p-5 px-3 px-sm-5 py-4 pt-0 pt-lg-5 parentFormContainer">
                <div className="formContainer d-flex justify-content-center">
                    <form
                        className="loginForm shadow p-5 my-lg-5 rounded-3"
                        onSubmit={SubmitHandler}
                    >
                        <h3 className="fw-semibold">LOGIN</h3>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label d-flex"
                            >
                                <i className="bi bi-person-circle me-2 fs-5 text-secondary"></i>
                                <p className="my-auto fw-normal text-dark">
                                    Email address
                                </p>
                            </label>
                            <input
                                type="email"
                                placeholder="username"
                                className="form-control border-none"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label d-flex"
                            >
                                <i className="bi bi-shield-lock-fill me-2 fs-5 text-secondary"></i>
                                <p className="my-auto fw-normal text-dark">
                                    Password
                                </p>
                            </label>
                            <input
                                type="password"
                                placeholder="********"
                                className="form-control"
                                id="exampleInputPassword1"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <a href="">Forgot Password?</a>
                        </div>
                        <div className="mb-3">
                            <p className="text-danger">{error && error}</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="loginImage d-none d-lg-block">
                    <img
                        src="/images/designer.svg"
                        className="img-fluid"
                        width={600}
                        height={600}
                        alt="learning-management"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
