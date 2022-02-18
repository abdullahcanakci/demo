import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectValue, INCREMENT } from "@/store/demoSlice";

export default function Homepage() {
  const value = useSelector(selectValue)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <div className="grid w-full h-full text-white app bg-slate-700 place-items-center">
      <button
        type="button"
        className="px-8 py-4 m-1 transition-colors rounded-md bg-slate-800 hover:bg-slate-900"
        onClick={() => dispatch(INCREMENT())}
      >
        {t('click-me')}
        <span className="inline-block w-6 ml-2 bg-yellow-300 rounded-full shadow-sm hover:shadow-md text-slate-900">
          {value}
        </span>
      </button>
    </div >
  );
}

