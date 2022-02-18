import { useTranslation } from "react-i18next"

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const onLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }


  return <div className="absolute top-0 right-0 p-2">
    <select defaultValue="en" className="px-3 py-1 rounded-md bg-slate-800" onChange={onLanguageChange}>
      <option value="en">EN</option>
      <option value="tr">TR</option>
    </select>
  </div>
}