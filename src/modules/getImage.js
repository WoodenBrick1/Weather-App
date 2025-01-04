import partially from "../weather-logos/partially-cloudly.png";
import overcast from "../weather-logos/overcast.png"
import snow from "../weather-logos/snowing.png";
import rain from "../weather-logos/raining.png";
import sun from "../weather-logos/sun.png";

export function getImage(condition) {

    if (condition == "partly-cloudy-day") {
        return partially;
    }
    else if (condition == "cloudy") {
        return overcast;
    } else if (condition == "snow") {
        return snow;
    } else if (condition == "rain") {
        return rain;
    } else if (condition == "clear-day") {
        return sun;
    } else {
        return partially;
    }
}