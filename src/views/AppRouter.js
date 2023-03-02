import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import routes from "../utils/rutes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, idx) => {
        return (
          route.element && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={<route.element />}
            />
          )
        );
      })}
      <Route path="/" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
