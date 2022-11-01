import { List, Item, Country, Flag } from "./CitiesList.styled";
// import { useState, useEffect } from "react";

const CitiesList = ({ locationData, onChooseCity, handleClick }) => {
  return (
    <List>
      {locationData.results.map((item) => {
        // const handleClick = (latitude, longitude) => {
        //   onChooseCity(latitude, longitude);
        //   // setCityName("");
        // };

        return (
          <Item
            key={item.id}
            onClick={() => handleClick(item.latitude, item.longitude)}
          >
            <Flag
              src={`https://hatscripts.github.io/circle-flags/flags/${item.country_code.toLowerCase()}.svg`}
              alt={item.coutry_code}
            />
            {item.name} <Country>({item.country})</Country>
          </Item>
        );
      })}
    </List>
  );
};

export default CitiesList;
