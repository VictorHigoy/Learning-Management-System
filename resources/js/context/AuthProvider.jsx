import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    let userInfo;
    let role;

    const user = localStorage.getItem("user-info");
    const token = localStorage.getItem("token");
    const type = localStorage.getItem("type");

    if (user) {
        userInfo = JSON.parse(user);
        role = JSON.parse(type);
    }

    return (
        <AuthContext.Provider value={{ role, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
