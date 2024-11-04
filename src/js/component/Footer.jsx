import React from "react";

let tiempo = new Date(2024, 11, 1, 18);
let year=tiempo.getFullYear();
function Footer(){
    return(
    <footer><p>Copyright @ {year}</p></footer>
    )
}
export default Footer;