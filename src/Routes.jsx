import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import PrivPolicy from "pages/Privacy";
import BecomeASeller from "pages/becomeASeller/BecomeASeller";
import AddBusniessDetails from "pages/becomeASeller/AddBusniessDetails";
import Dashboard from "pages/clientDashbaord/dashboard/Dashboard";
import Incoice from "pages/clientDashbaord/dashboard/invoice/Incoice";
import OrderDashbaord from "pages/clientDashbaord/dashboard/order/OrderDashbaord";
import SellarShop from "pages/clientDashbaord/dashboard/sellarShop/SellarShop";
import RatingAndReviews from "pages/clientDashbaord/dashboard/ratingandReviews/RatingAndReviews";
import Notification from "pages/clientDashbaord/dashboard/notification/Notification";
import SupportSeller from "pages/clientDashbaord/dashboard/support/SupportSeller";

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
    { path: "/become-a-seller/notification", element: <Notification/> },
    { path: "/become-a-seller/support", element: <SupportSeller/> },
    { path: "/become-a-seller/invoices", element: <Incoice/> },
    { path: "/become-a-seller/orders", element: <OrderDashbaord/> },
    { path: "/become-a-seller/shops", element: <SellarShop/> },
    { path: "/become-a-seller/rating-and-reviews", element: <RatingAndReviews/> },
    { path: "*", element: <NotFound /> },
   
  ]);

  return element;
};

export default ProjectRoutes;
