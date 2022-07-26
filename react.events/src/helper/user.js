import jwtDecode from "jwt-decode";

export const user = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export const isLoggedin = () => {
    return user()!==null;
}

export const nickname = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.jwtToken) {
        return jwtDecode(user.jwtToken).sub;
    }
    return null;
}