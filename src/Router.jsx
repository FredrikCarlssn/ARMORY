import { createHashRouter } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { LandingPage } from "./pages/LandingPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { LoginPage } from "./pages/ProfilePage/LoginPage";
import { CraftedPage } from "./pages/CraftedPage";
import { AboutPage } from "./pages/AboutPage";
import { DisplayOwnedToken } from "./pages/ProfilePage/DisplayOwnedToken";

export const Router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage />, index: true },
      { path: "/search", element: <LoginPage /> },
      { path: "/profile/:address", element: <ProfilePage /> },
      {
        path: "/token/:tokenId",
        element: <DisplayOwnedToken />,
      },
      { path: "/about", element: <AboutPage /> },
      { path: "/crafted", element: <CraftedPage /> },
    ],
  },
]);
