import  { useEffect } from "react";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    //    @ts-ignore
    window.location = "/";
  });
  return null;
}

export default Logout;
