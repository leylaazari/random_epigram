import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Spinner from "src/components/custom/Spinner"; // routes config
import routes from "src/routes/routes";

const AppContent = () => {
  return (
    <div className="main-container text-center">
      <Suspense fallback={<Spinner />}>
        <Routes>
          {routes.map((route: any, idx: number) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="Home" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default React.memo(AppContent);
