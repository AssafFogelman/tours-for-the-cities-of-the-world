var EDayStatus;
(function (EDayStatus) {
    EDayStatus[EDayStatus["NIGHT"] = 0] = "NIGHT";
    EDayStatus[EDayStatus["DAY"] = 1] = "DAY";
})(EDayStatus || (EDayStatus = {}));
class WeatherStatus {
    constructor(code, description, dayStatus, iconUrl) {
        this.code = code;
        this.description = description;
        this.dayStatus = dayStatus;
        this.iconUrl = iconUrl;
    }
}
let weatherStatusArray = [
    new WeatherStatus(0, "Clear sky", EDayStatus.DAY, "http://openweathermap.org/img/wn/01d@2x.png"),
    new WeatherStatus(0, "Clear sky", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/01n@2x.png"),
    new WeatherStatus(1, "Mainly clear sky", EDayStatus.DAY, "http://openweathermap.org/img/wn/02d@2x.png"),
    new WeatherStatus(1, "Mainly clear sky", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/02n@2x.png"),
    new WeatherStatus(2, "partly cloudy sky", EDayStatus.DAY, "http://openweathermap.org/img/wn/03d@2x.png"),
    new WeatherStatus(2, "partly cloudy sky", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/04n@2x.png"),
    new WeatherStatus(3, "sky full of clouds (overcast)", EDayStatus.DAY, "http://openweathermap.org/img/wn/03d@2x.png"),
    new WeatherStatus(3, "sky full of clouds (overcast)", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/04n@2x.png"),
    new WeatherStatus(45, "Fogy weather", EDayStatus.DAY, "http://openweathermap.org/img/wn/50n@2x.png"),
    new WeatherStatus(45, "Fogy weather", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/50n@2x.png"),
    new WeatherStatus(48, "Icy Fog", EDayStatus.DAY, "http://openweathermap.org/img/wn/50n@2x.png"),
    new WeatherStatus(48, "Icy Fog", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/50n@2x.png"),
    new WeatherStatus(51, "Light drizzle", EDayStatus.DAY, "http://openweathermap.org/img/wn/10d@2x.png"),
    new WeatherStatus(51, "Light drizzle", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/10n@2x.png"),
    new WeatherStatus(53, "Moderate drizzle", EDayStatus.DAY, "http://openweathermap.org/img/wn/10d@2x.png"),
    new WeatherStatus(53, "Moderate drizzle", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/10n@2x.png"),
    new WeatherStatus(55, "Dense drizzle", EDayStatus.DAY, "http://openweathermap.org/img/wn/10d@2x.png"),
    new WeatherStatus(55, "Dense drizzle", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/10n@2x.png"),
    new WeatherStatus(56, "Light freezing drizzle", EDayStatus.DAY, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(56, "Light freezing drizzle", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(57, "Dense freezing drizzle", EDayStatus.DAY, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(57, "Dense freezing drizzle", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(61, "Slight rain", EDayStatus.DAY, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(61, "Slight rain", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(63, "Moderate Rain", EDayStatus.DAY, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(63, "Moderate Rain", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(65, "Heavy rain", EDayStatus.DAY, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(65, "Heavy rain", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(66, "Light freezing rain", EDayStatus.DAY, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(66, "Light freezing rain", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(67, "Heavy freezing rain", EDayStatus.DAY, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(67, "Heavy freezing rain", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/09n@2x.png"),
    new WeatherStatus(71, "Slight snowfall", EDayStatus.DAY, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(71, "Slight snowfall", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(73, "Moderate snowfall", EDayStatus.DAY, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(73, "Moderate snowfall", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(75, "Heavy snowfall", EDayStatus.DAY, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(75, "Heavy snowfall", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(77, "Snow grains (light snow)", EDayStatus.DAY, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(77, "Snow grains (light snow)", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(80, "Slight rain showers", EDayStatus.DAY, "http://openweathermap.org/img/wn/11n@2x.png"),
    new WeatherStatus(80, "Slight rain showers", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/11n@2x.png"),
    new WeatherStatus(81, "Moderate rain showers", EDayStatus.DAY, "http://openweathermap.org/img/wn/11n@2x.png"),
    new WeatherStatus(81, "Moderate rain showers", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/11n@2x.png"),
    new WeatherStatus(82, "Violent rain showers", EDayStatus.DAY, "http://openweathermap.org/img/wn/11n@2x.png"),
    new WeatherStatus(82, "Violent rain showers", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/11n@2x.png"),
    new WeatherStatus(85, "Slight snow showers", EDayStatus.DAY, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(85, "Slight snow showers", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(86, "Heavy snow showers", EDayStatus.DAY, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(86, "Heavy snow showers", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(95, "Slight to moderate thunderstorm", EDayStatus.DAY, "http://openweathermap.org/img/wn/11n@2x.png"),
    new WeatherStatus(95, "Slight to moderate thunderstorm", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/11n@2x.png"),
    new WeatherStatus(96, "Thunderstorm with slight hail", EDayStatus.DAY, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(96, "Thunderstorm with slight hail", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(99, "Thunderstorm with Heavy hail", EDayStatus.DAY, "http://openweathermap.org/img/wn/13n@2x.png"),
    new WeatherStatus(99, "Thunderstorm with Heavy hail", EDayStatus.NIGHT, "http://openweathermap.org/img/wn/13n@2x.png"),
];
export { EDayStatus, weatherStatusArray };
