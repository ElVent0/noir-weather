// let lat = 50.4823808;
// let lon = 30.3562752;
let lat = null;
let lon = null;

const setLatLon = (position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
};

navigator.geolocation.getCurrentPosition(setLatLon);

// API передумав давати дані про Україну, тому поки закоментував можливість визначення локації юзера

export const getData = async () => {
  try {
    const data = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(
        lat
      )}&longitude=${parseFloat(
        lon
      )}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,surface_pressure,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=GMT`
      // `https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,surface_pressure,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`
    );
    const parsedData = await data.json();
    console.log(lat, lon, parsedData);
    return parsedData;
  } catch (e) {
    console.log(e);
  }
};

export const getDataFromSearch = async (lat, lon) => {
  console.log(lat, lon);
  try {
    const data = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(
        lat
      )}&longitude=${parseFloat(
        lon
      )}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,surface_pressure,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=GMT`
    );
    const parsedData = await data.json();
    console.log(lat, lon, parsedData);
    return parsedData;
  } catch (e) {
    console.log(e);
  }
};
