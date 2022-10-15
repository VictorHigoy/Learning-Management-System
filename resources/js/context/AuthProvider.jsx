import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState();
    let user;

    const userInfo = localStorage.getItem("user-info");
    const token = localStorage.getItem("token");

    if (userInfo) {
        user = JSON.parse(userInfo);
    }

    return (
        <AuthContext.Provider value={{ user, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
