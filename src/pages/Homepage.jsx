import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Homepage() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation()

  return (
    <div className="grid w-full h-full text-white app bg-slate-700 place-items-center">
      <button
        type="button"
        className="px-8 py-4 m-1 transition-colors rounded-md bg-slate-800 hover:bg-slate-900"
        onClick={() => setCount((c) => c + 1)}
      >
        {t('click-me')}
        <span className="inline-block w-6 ml-2 bg-yellow-300 rounded-full shadow-sm hover:shadow-md text-slate-900">
          {count}
        </span>
      </button>
    </div>
  );
}

