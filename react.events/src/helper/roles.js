import jwtDecode from "jwt-decode";

export const roles = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.jwtToken) {
        return jwtDecode(user.jwtToken).roles;
    }
    return null;
}

export const isAdmin = () => {
    if (roles()) {
        return roles().includes('ROLE_ADMIN')
    }
    return false;
}