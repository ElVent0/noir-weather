// let lat = 50.4823808;
// let lon = 30.3562752;

// const setLatLon = (position) => {
//   lat = position.coords.latitude;
//   lon = position.coords.longitude;
// };

// navigator.geolocation.getCurrentPosition(setLatLon);

// console.log(parseFloat(lat), parseFloat(lon));

// API передумав давати дані про Україну, тому поки закоментував можливість визначення локації юзера

export const getData = async () => {
  try {
    const data = await fetch(
      // `https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(
      //   lat
      // )}&longitude=${parseFloat(
      //   lon
      // )}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,surface_pressure,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`
      `https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,surface_pressure,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`
      // {
      //   mode: "cors",
      //   cache: "no-cache",
      // }
    );
    const parsedData = await data.json();
    console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.log(e);
  }
};

export const getDataFromSearch = async (lat, lon) => {
  try {
    const data = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(
        lat
      )}&longitude=${parseFloat(
        lon
      )}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,surface_pressure,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`
      // {
      //   mode: "cors",
      //   cache: "no-cache",
      // }
    );
    const parsedData = await data.json();
    return parsedData;
  } catch (e) {
    console.log(e);
  }
};
