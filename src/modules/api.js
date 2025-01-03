

const key = "927KEG7A7Z4LYQH8YRLCEHMHZ";

export async function getData (country, unitGroup) {

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country}?unitGroup=${unitGroup}&key=${key}&contentType=json`, {
            mode: 'cors',
        })

        if (!response.ok) {

            return;
        }
         const data = response.json();

        console.log(data);
        return data;
    } catch(error) {
        console.log("AHHHHHH");
    }
} 