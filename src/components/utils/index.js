import { Navigate } from "react-router-dom";


export const Protected = ({ children }) => {
    const isLogin = localStorage.getItem("Token");
    console.log(isLogin)
    if (!isLogin) return <Navigate to={"/"} />
    return <>{children}</>;
}

export const Public = ({ children }) => {
    const isLogin = localStorage.getItem("Token")
    console.log(children, "children", !isLogin);
    // console.log(isLogin, "islogin")
    if (!isLogin) return <>{children}</>;
    return <Navigate to={"/home"} />
}

// export const getCookie = (cname) => {
//     const name = `${cname}=`;
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const ca = decodedCookie.split(";");
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) === " ") {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) === 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// };

// export const setCookie = (cname, cvalue, exdays = 2) => {
//     const domain = window.location.hostname;
//     const d = new Date();
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//     const expires = `expires=${d.toUTCString()}`;
//     document.cookie = `${cname}=${cvalue};${expires};domain=${domain};path=/`;
// };

//   (cname) => {
//     const domain = window.location.hostname;
//     document.cookie = `kxSupervisorToken=;domain=${domain};path=/`;
//     document.cookie = `kxUserType=;domain=${domain};path=/`;
//     document.cookie = `kxUserName=;domain=${domain};path=/`;
//     const dt = new Date();
//     dt.setTime(dt.getTime() - 24 * 60 * 60 * 1000);
//     document.cookie = `${cname}=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
//     return true;
//   },


export const getToken = (TokenName) => {
    return localStorage.getItem(TokenName)

}