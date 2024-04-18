import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import CreateFood from "pages/CreateFood";
import AllFood from "pages/AllFood";
import UpdateFood from "pages/UpdateFood";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "createfood",
      element: <CreateFood />,
    },
    {
      path: "allfood",
      element: <AllFood />,
    },
    {
      path: "updatefood",
      element: <UpdateFood />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
