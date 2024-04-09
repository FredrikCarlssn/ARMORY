import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { styled } from "styled-components";
import { AnimatePresence } from "framer-motion";

const StyledMain = styled.main`
  color: white;
  min-height: 100vh;
`;

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </StyledMain>
      <Footer />
    </>
  );
};
