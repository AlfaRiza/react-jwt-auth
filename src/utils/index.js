import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

// const TOKEN_KEY = 'jwt';    

// export const login = () => {
//     localStorage.setItem(TOKEN_KEY, 'TestLogin');
// }

// export const logout = () => {
//     localStorage.removeItem(TOKEN_KEY);
// }

export const IsLogin = () => {
    // const [token, setToken] = useCookies(['refresh_token']);
    // if (token.refresh_token) {
    //     return true;
    // }

    // let history = Navigate()

    // try {
    //     // const response = await axios.get('http://localhost:8000/token');
        
    //     const decoded = jwtDecode(token.refresh_token);
    //     return true;
    //     // console.log(decoded.name);
    //     // setName(decoded.name);
    //     // setExpired(decoded.exp)
    // } catch (error) {
    //     // if (error.response) {
    //     //     // kembali ke login
    //     //     history('/');
    //     // }
    //     return false;
    // }

    return false;
}