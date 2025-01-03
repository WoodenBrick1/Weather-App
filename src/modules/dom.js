import {getData} from "./api"


export const domInput = (function(){


    const getCountry = () => {
        const country = document.getElementById("country").value;

        return country;
    }

    const getUnit = () => {

        const metric = document.getElementById("metric");
        const us = document.getElementById("us");

        if (metric.checked) {
            return "metric";
        } else if (us.checked){
            return "us";
        }
    }

    return {
        getCountry,
        getUnit
    }
})();

export const domHandler = (function() {

    const getValues = () => {

        const country = domInput.getCountry();
        const unitGroup = domInput.getUnit();

        getData(country, unitGroup).then(data => {
            renderData(data);
        })
    }

    const renderData = (data) => {
        console.log(data);
    }

    return {
        getValues,
    }
})();