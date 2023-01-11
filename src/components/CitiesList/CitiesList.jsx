import { List, Item, Country, Flag } from "./CitiesList.styled";

const CitiesList = ({ locationData, onChooseCity, handleClick }) => {
  return (
    <List>
      {locationData.results.map((item) => {
        return (
          <Item
            key={item.id}
            onClick={() =>
              handleClick(item.latitude, item.longitude, item.name)
            }
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
