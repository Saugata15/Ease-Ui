import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ComponentLayout from "../layouts/ComponentLayout";
import HomePage from "../pages/HomePage";

import { lazy } from "react";
import ProgressPage from "@/pages/components/ProgressPage";
import ToastPage from "@/pages/components/ToastPage";
import SpinnerPage from "@/pages/components/SpinnerPage";
let AboutPage = lazy(() => import("@/pages/AboutPage"));
let TemplatesPage = lazy(() => import("@/pages/TemplatesPage"));
let TooltipPage = lazy(() => import("@/pages/components/TooltipPage"));
let NavbarPage = lazy(() => import("@/pages/components/NavbarPage"));
let InputPage = lazy(() => import("@/pages/components/InputPage"));
let ModalPage = lazy(() => import("@/pages/components/ModalPage"));
let CardPage = lazy(() => import("@/pages/components/CardPage"));
let ButtonPage = lazy(() => import("@/pages/components/ButtonPage"));
let TablePage = lazy(() => import("@/pages/components/TablePage"));
let SkeletonPage = lazy(() => import("@/pages/components/SkeletonPage"));
let BadgePage = lazy(() => import("@/pages/components/BadgePage"));

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/templates",
          element: <TemplatesPage />,
        },
        {
          path: "components",
          element: <ComponentLayout />,
          children: [
            {
              index: true,
              element: <Navigate to="button" replace />,
            },

            {
              path: "button",
              element: <ButtonPage />,
            },
            {
              path: "card",
              element: <CardPage />,
            },
            {
              path: "modal",
              element: <ModalPage />,
            },
            {
              path: "input",
              element: <InputPage />,
            },
            {
              path: "navbar",
              element: <NavbarPage />,
            },
            {
              path: "tooltip",
              element: <TooltipPage />,
            },
            {
              path: "table",
              element: <TablePage />,
            },
            {
              path: "skeleton",
              element: <SkeletonPage />,
            },
            {
              path: "badge",
              element: <BadgePage />,
            },
            {
              path: "progress",
              element: <ProgressPage />,
            },
            {
              path: "toast",
              element: <ToastPage />,
            },
            {
              path: "spinner",
              element: <SpinnerPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
