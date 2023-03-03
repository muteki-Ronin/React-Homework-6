// CORE
import { useContext } from "react";
// CONTEXT
import { ThemeContext } from "../../context/ThemeProvider";
// STYLES
import "./style.css";

export const Card = ({ item, itemType }) => {
  const { themType } = useContext(ThemeContext);

  return (
    <>
      {itemType === "people" && (
        <div className={themType ? "card-container card-container_dark" : "card-container card-container_light"}>
          <h3>{item.name}</h3>
          <div>
            <p>Gender: {item.gender}</p>
            <p>Birth Year: {item.birth_year}</p>
            <p>Eye Color: {item.eye_color}</p>
          </div>
        </div>
      )}
      {itemType === "planets" && (
        <div className={themType ? "card-container card-container_dark" : "card-container card-container_light"}>
          <h3>{item.name}</h3>
          <div>
            <p>Population: {item.population}</p>
            <p>Rotation Period: {item.rotation_period}</p>
            <p>Diameter: {item.diameter}</p>
          </div>
        </div>
      )}
      {itemType === "starships" && (
        <div className={themType ? "card-container card-container_dark" : "card-container card-container_light"}>
          <h3>{item.name}</h3>
          <div>
            <p>Model: {item.model}</p>
            <p>Starship class: {item.starship_class}</p>
            <p>Length: {item.length}</p>
          </div>
        </div>
      )}
    </>
  );
};
