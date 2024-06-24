import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import PrivPolicy from "pages/Privacy";
import BecomeASeller from "pages/becomeASeller/BecomeASeller";
import AddBusniessDetails from "pages/becomeASeller/AddBusniessDetails";
import Dashboard from "pages/dashboard/Dashboard";

const ProjectRoutes = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  let element = useRoutes([
    { path: "/", element: <Home1  /> },
    { path: "/PrivacyPolicy", element: <PrivPolicy/> },
    { path: "/become-a-seller", element: <BecomeASeller/> },
    { path: "/become-a-seller/business-details", element: <AddBusniessDetails/> },
    { path: "/become-a-seller/dashboard", element: <Dashboard/> },
    { path: "*", element: <NotFound /> },
   
  ]);

  return element;
};

export default ProjectRoutes;
