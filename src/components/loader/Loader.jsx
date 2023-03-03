// CORE
import { useContext } from "react";
import RingLoader from "react-spinners/RingLoader";
// CONTEXT
import { ThemeContext } from "../../context/ThemeProvider";

export const Loader = () => {
  const { themType } = useContext(ThemeContext);

  return (
    <RingLoader
      color={themType ? "lightblue" : "black"}
      size={60}
      speedMultiplier={1}
    />
  );
};
