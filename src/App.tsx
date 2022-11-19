import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Spinner from "src/components/custom/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={window.location.pathname || ""}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
