// CORE
import { useState, useEffect, useContext } from "react";
// COMPONENTS
import { Header } from "../components/header/Header";
import { ListItems } from "../components/listItems/ListItems";
import { Loader } from "../components/loader/Loader";
import { ErrorBoundary } from "../components/errorBoundary/ErrorBoundary";
// CONTEXT
import { ThemeContext } from "../context/ThemeProvider";
import { LanguageContext } from "../context/LanguageProvider";
// STYLES
import "./style.css";

export const App = () => {
  const [state, setState] = useState({
    items: [],
    itemType: "people",
    isLoading: true,
  });

  const { themType } = useContext(ThemeContext);
  const { languageData } = useContext(LanguageContext);

  const requestItems = (type) => {
    fetch(`https://swapi.dev/api/${type}`)
      .then((response) => response.json())
      .then((data) =>
        setState({ items: data.results, itemType: type, isLoading: false })
      )
      .catch((error) => {
        console.error(error);
        setState({ ...state, isLoading: false });
      });
  };

  const handleClick = (type) => {
    setState({ ...state, isLoading: true });
    requestItems(type);
  };

  useEffect(() => {
    requestItems("people");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorBoundary>
      <div className={themType ? "layout dark" : "layout light"}>
        <div className="container">
          <Header />
          <main className="main-container">
            <div className="btn-panel">
              <button
                className={state.itemType === "people" ? "btn-active" : "btn"}
                onClick={() => handleClick("people")}
              >
                {languageData.peopleBtn}
              </button>

              <button
                className={state.itemType === "planets" ? "btn-active" : "btn"}
                onClick={() => handleClick("planets")}
              >
                {languageData.planetsBtn}
              </button>

              <button
                className={
                  state.itemType === "starships" ? "btn-active" : "btn"
                }
                onClick={() => handleClick("starships")}
              >
                {languageData.starShipsBtn}
              </button>
            </div>
            {state.isLoading ? (
              <Loader />
            ) : (
              <ListItems items={state.items} type={state.itemType} />
            )}
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
