// CORE
import { useContext } from "react";
// CONTEXT
import { ThemeContext } from "../../context/ThemeProvider";
// STYLES
import "./style.css";

export const ListItem = ({ item, index, clickItem }) => {
  const { themType } = useContext(ThemeContext);

  const handleClick = () => {
    clickItem(index);
  };

  return (
    <li
      className={
        themType ? "list-item list-item_dark" : "list-item list-item_light"
      }
      onClick={handleClick}
    >
      {item.name}
    </li>
  );
};
