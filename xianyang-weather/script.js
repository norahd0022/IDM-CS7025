
// 1. API URL for the weather forecast in Xianyang
const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=34.3378&longitude=108.7026&hourly=temperature_2m,precipitation_probability&timezone=Asia%2FSingapore&forecast_days=1";

// 2. Display the selected weather data on the webpage
function displayWeather(data) {

    // 3. Check that the required weather data is available
    if (
        !data.hourly ||
        data.hourly.temperature_2m?.[12] == null ||
        data.hourly.precipitation_probability?.[12] == null ||
        data.hourly.time?.[12] == null
    ) {
        throw new Error("Weather data is incomplete");
    }

    // 4. Get the forecast for 12:00 (index 12 in the hourly arrays)
    const temperature = data.hourly.temperature_2m[12];
    const rain = data.hourly.precipitation_probability[12];
    const time = data.hourly.time[12];

    // 5. Update the HTML elements with the weather information
   // 5.1 Convert the API time into a more readable format
const formattedTime = new Date(time).toLocaleString("en-IE", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai"
});

document.querySelector("#weather-time").textContent =
    "Forecast time: " + formattedTime;

    document.querySelector("#temperature").textContent =
        temperature + " °C";

    document.querySelector("#rain").textContent =
        rain + "%";

    // 6. Show a different message depending on the chance of rain
    if (rain >= 50) {
        document.querySelector("#weather-message").textContent =
            "There is a high chance of rain.";
    } else {
        document.querySelector("#weather-message").textContent =
            "The chance of rain is relatively low.";
    }
}

// 7. Request weather data from the API
fetch(weatherURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Weather request failed");
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error("Error fetching weather:", error);

        const message = document.querySelector("#weather-message");
        if (message) {
            message.textContent = "Unable to load weather data.";
        }
    });
