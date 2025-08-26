import { useContext } from "react";
import LanguageContext from "./LanguageContext";


const LanguageButton = () => {

  const { language, setlanguage } = useContext(LanguageContext)

  const next = language === "en" ? "ru" : "en"
  return (
    <button className={language === "ru" ? "ru" : "en"}
      onClick={() => setlanguage(next)}>
      {language === "en" ? "Switch to RU" : "Переключить на английский"}
    </button>

  )


}

export default LanguageButton