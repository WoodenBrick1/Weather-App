import "./styles.css";
import {getData} from "./modules/api"
import {domHandler} from "./modules/dom";

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("get-data").addEventListener("click", getData);
})
