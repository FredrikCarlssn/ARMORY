import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { FooterV2 } from "./FooterV2";

import { AnimatePresence } from "framer-motion";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </main>
      <FooterV2 />
    </>
  );
};
