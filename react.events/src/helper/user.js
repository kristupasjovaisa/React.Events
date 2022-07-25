export const user = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export const isLoggedin = () => {
    return user()!==null;
}