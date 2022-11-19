import React from "react";

const Home = React.lazy(() => import("../views/home/Index"));
const About = React.lazy(() => import("../views/about/Index"));

const routes = [
  { path: "/", exact: true, name: "Home", element: Home },
  { path: "/Home", name: "Home", element: Home },
  { path: "/About", name: "About", element: About },
];

export default routes;
