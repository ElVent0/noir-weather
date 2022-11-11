export const getLocation = async (cityName) => {
  try {
    const data = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`,
      {
        mode: "cors",
        cache: "no-cache",
      }
    );
    const parsedData = await data.json();
    return parsedData;
  } catch (e) {
    console.log(e);
  }
};
