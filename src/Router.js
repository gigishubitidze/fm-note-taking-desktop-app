import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";
import MainLayout from "./layout/MainLayout";
import ThemeOptions from "./pages/settings/ThemeOptions";
import ChangePassword from "./pages/settings/ChangePassword";
import { colorModeOption, fontStyleOption } from "./pages/settings/options"; 

const Notes = lazy(() => import("./pages/notes/Notes"));
const Settings = lazy(() => import("./pages/settings/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="all-notes" replace />,
      },
      {
        path: "all-notes",
        element: <Notes />,
        handle: { title: "All Notes" },
      },
      {
        path: "archived-notes",
        element: <Notes archived />,
        handle: { title: "Archived Notes" },
      },
      {
        path: "tag/:tagName",
        element: <Notes />,
        handle: {
          title: (params) => ({
            prefix: "Notes Tagged:",
            dynamic: params.tagName,
          }),
        },
      },
      {
        path: "search/:searchQuery",
        element: <Notes />,
        handle: {
          title: (params) => ({
            prefix: "Showing results for:",
            dynamic: params.searchQuery,
          }),
        },
      },
      {
        path: "settings",
        element: <Settings />,
        handle: { title: "Settings" },
        children: [
          { index: true, element: <Navigate to="colors" /> },
          {
            path: "colors",
            element: <ThemeOptions option={colorModeOption} />,
            handle: { title: "Settings" },
          },
          {
            path: "fonts",
            element: <ThemeOptions option={fontStyleOption} />,
            handle: { title: "Settings" },
          },
          {
            path: "change-password",
            element: <ChangePassword />,
            handle: { title: "Settings" },
          },
          { path: "logout", element: <p>Logout</p> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default createBrowserRouter(routes);
