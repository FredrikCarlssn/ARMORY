import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { FooterV2 } from "./FooterV2";

import { AnimatePresence } from "framer-motion";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="m:-mt-16">
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </main>
      <FooterV2 />
    </>
  );
};
