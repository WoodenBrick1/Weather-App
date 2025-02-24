import {getData} from "./api";
import {format} from "../../node_modules/date-fns";
import {getImage} from "./getImage";

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

        console.log(data);

        // Timezone
        
        const timezoneContainer = document.createElement("div");
        timezoneContainer.id = "timezone-container";


        const timezoneText = document.createElement("p");
        timezoneText.id = "timezone-text";
        timezoneText.textContent = "Timezone:";

        const timezone = document.createElement("p");
        timezone.id = "timezone";
        timezone.textContent = data.timezone;


        timezoneContainer.appendChild(timezoneText);
        timezoneContainer.appendChild(timezone);
        infoContainer.appendChild(timezoneContainer);
      

        // Description

        const descriptionContainer = document.createElement("div");
        descriptionContainer.id = "description-container";


        const descriptionText = document.createElement("p");
        descriptionText.id = "description-text";
        descriptionText.textContent = "Description:";

        const description = document.createElement("p");
        description.id = "description";
        description.textContent = data.description;


        descriptionContainer.appendChild(descriptionText);
        descriptionContainer.appendChild(description);
        infoContainer.appendChild(descriptionContainer);
        // Days

        const days = data.days;

        const daysContainer = document.createElement("div");
        daysContainer.id = "days-container";
        

        
        

        for (let i = 0; i < 7; i++) {
           
            const dayContainer = document.createElement("div");
            dayContainer.classList.add("dayContainer");

            // The Day Name
            const dayName = document.createElement("p");
            dayName.classList.add("dayName");
            dayName.textContent = format(days[i].datetime, 'E');

           // console.log(days[i]);

            // Condition
            const condition = document.createElement("p");
            condition.classList.add("condition");
            condition.textContent = days[i].conditions;

     
            // Logo
            const img = document.createElement("img");
            img.classList.add("logo");
            img.src = getImage(days[i].icon);


            // Temperature Text
            const tempText = document.createElement("p");
            tempText.classList.add("tempText");
            tempText.textContent = "Temperature:"
            // Temperature
            const temp = document.createElement("p");
            temp.classList.add("temp");
            temp.textContent = days[i].temp;

            if (domInput.getUnit() == "metric") {
                temp.textContent += "°C";
            } else if (domInput.getUnit() == "us") {
                temp.textContent += "°F";
            }



            dayContainer.appendChild(dayName);
            dayContainer.appendChild(condition);
            dayContainer.appendChild(img);
            dayContainer.appendChild(tempText);
            dayContainer.appendChild(temp);

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