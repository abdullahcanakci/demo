import React, { lazy, useMemo, Suspense } from "react";
import Spinner from "@/components/common/Spinner";
import { Route, Routes } from "react-router-dom";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { Provider } from "react-redux";
import { store } from "@/store"

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
      <Provider store={store}>
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
      </Provider>
    </Suspense >
  );
}

export default App;
