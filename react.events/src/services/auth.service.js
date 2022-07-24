import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const register = (nickname, email,city,phoneNumber, password) => {
    return axios.post(API_URL + "register", {
        nickname,
        email,
        city,
        phoneNumber,
        password,
    });
};

const login = (nickname, password) => {
    return axios
        .post(API_URL + "login", {
            nickname,
            password,
        })
        .then((response) => {
            if (response.data.jwtToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;