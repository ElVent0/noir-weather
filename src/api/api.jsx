let lat;
let lon;

const callback = (position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  console.log(lat, lon);
};

navigator.geolocation.getCurrentPosition(callback);

export const getData = async () => {
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,surface_pressure,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`
  );
  const parsedData = await data.json();
  return parsedData;
};
