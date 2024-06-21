import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import PrivPolicy from "pages/Privacy";
import BecomeASeller from "pages/becomeASeller/BecomeASeller";
import AddBusniessDetails from "pages/becomeASeller/AddBusniessDetails";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home1  /> },
    { path: "/PrivacyPolicy", element: <PrivPolicy/> },
    { path: "/become-a-seller", element: <BecomeASeller/> },
    { path: "/become-a-seller/business-details", element: <AddBusniessDetails/> },
    { path: "*", element: <NotFound /> },
    // {
    //   path: "home1",
    //   element: <Home1 />,
    // },
  ]);

  return element;
};

export default ProjectRoutes;
