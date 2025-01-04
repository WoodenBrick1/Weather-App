import {getData} from "./api"


export const domInput = (function(){


    const getCountry = () => {
        const country = document.getElementById("country").value;

        return country;
    }

    const getUnit = () => {

        const metric = document.getElementById("metric");


        if (metric.checked) {
            return "metric";
        } else {
            return "us";
        }
    }

    return {
        getCountry,
        getUnit
    }
})();

export const domHandler = (function() {

    const infoContainer = document.getElementById("info");
    const getValues = () => {

        const country = domInput.getCountry();
        const unitGroup = domInput.getUnit();

        getData(country, unitGroup).then(data => {
            renderData(data);
        }).catch(() => {displayError()});
    }

    const renderData = (data) => {
        infoContainer.innerHTML = "";

        const days = data.days;

        const daysContainer = document.createElement("div");
        daysContainer.id = "days-container";
        
        
        for (let i = 0; i < 7; i++) {
           
            const dayContainer = document.createElement("div");
            dayContainer.classList.add("dayContainer");

            const condition = document.createElement("p");
            condition.textContent = days[i].conditions;
            dayContainer.appendChild(condition);
            daysContainer.appendChild(dayContainer);

        }

       

        infoContainer.appendChild(daysContainer);
    }


    const displayError = () => {

    }
    return {
        getValues,
    }
})();