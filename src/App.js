import React, { useState } from "react";

import Header from "./components/homePage/header/Header";
import Content from "./components/homePage/content/Content";

import styles from "./App.module.css";
import LanguageContext, { LANGUAGES, STRINGS } from "./languageContext";

function App() {
  const [cart, setCart] = useState([]);
  const [language, setLanguage] = useState(LANGUAGES.ENG);
  const [lang, setLang] = useState("ENG");
  const onClickLeanguage = () => {
    if (LANGUAGES.ENG === language) {
      setLanguage(LANGUAGES.RUS);
      setLang("RUS");
    } else if (LANGUAGES.RUS === language) {
      setLanguage(LANGUAGES.UKR);
      setLang("UKR");
    } else if (LANGUAGES.UKR === language) {
      setLanguage(LANGUAGES.BEL);
      setLang("BEL");
    } else if (LANGUAGES.BEL === language) {
      setLanguage(LANGUAGES.PL);
      setLang("PL");
    } else if (LANGUAGES.PL === language) {
      setLanguage(LANGUAGES.ENG);
      setLang("ENG");
    }
  };
  return (
    <LanguageContext.Provider value={STRINGS[language]}>
      <div className={styles.App}>
        <div className={styles.wrapper}>
          <Header
            onClickLeanguage={onClickLeanguage}
            lang={lang}
            cart={cart}
            setCart={setCart}
          />
          <Content cart={cart} setCart={setCart} />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
