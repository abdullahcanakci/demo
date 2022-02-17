import React, { lazy, useMemo, Suspense } from "react";
import Spinner from "@/components/common/Spinner";
import { Route, Routes } from "react-router-dom";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

function App() {
  const routes = useMemo(() => {
    return [
      {
        path: '/',
        component: lazy(() => import('@/pages/Homepage.jsx'))
      }
    ]
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <LanguageSwitcher />
      <Routes>
        {
          routes.map(route => <Route
            key={route.path}
            path="/"
            element={<route.component />} />
          )
        }
      </Routes>
    </Suspense >
  );
}

export default App;
