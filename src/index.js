import "./styles.css";
import {domHandler} from "./modules/dom";

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("get-data").addEventListener("click", domHandler.getValues);
    document.getElementById("country").addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            domHandler.getValues();
        }
    })
})
