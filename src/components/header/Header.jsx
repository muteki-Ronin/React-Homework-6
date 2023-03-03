// CORE
import { useContext } from "react";
// CONTEXT
import { ThemeContext } from "../../context/ThemeProvider";
import { LanguageContext } from "../../context/LanguageProvider";
// STYLES
import "./style.css";

export const Header = () => {
  const { themType, setThemType } = useContext(ThemeContext);
  const { languageData, getLanguageData } = useContext(LanguageContext);

  const toggleThem = () => {
    setThemType(!themType);
  };

  const toggleLanguage = () => {
    languageData.type === "eng"
      ? getLanguageData("ru")
      : getLanguageData("eng");
  };

  return (
    <header className="header-container">
      <h1
        className={
          themType
            ? "header-title header-title_dark"
            : "header-title header-title_light"
        }
      >
        {languageData.header}
      </h1>

      <div className="header-btn_panel">
        <button
          onClick={toggleThem}
          className={
            themType ? "them-btn them-btn_dark" : "them-btn them-btn_light"
          }
        >
          {themType ? languageData.themeBtnDark : languageData.themeBtnLight}
        </button>
        <button
          className={
            themType ? "them-btn them-btn_dark" : "them-btn them-btn_light"
          }
          onClick={toggleLanguage}
        >
          {languageData.languageBtn}
        </button>
      </div>
    </header>
  );
};
