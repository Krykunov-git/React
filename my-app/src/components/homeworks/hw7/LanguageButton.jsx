import { useContext } from "react";
import LanguageContext from "./LanguageContext";


const LanguageButton = () => {

  const { language, setlanguage } = useContext(LanguageContext)

  const next = language === "en" ? "ru" : "en"
  return (
    <div>
      <h1>language button</h1>
      <button className={language === "ru" ? "ru" : "en"}
        onClick={() => setlanguage(next)}>
        {language === "en" ? "Switch to RU" : "Переключить на английский"}
      </button>
    </div>

  )


}

export default LanguageButton