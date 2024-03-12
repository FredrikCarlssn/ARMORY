import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

import { styled } from "styled-components";
import { AnimatePresence } from "framer-motion";

const StyledMain = styled.main`
  color: white;
  min-height: 100vh;
`;

export const Layout = () => {
  return (
    <>
      <StyledMain>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </StyledMain>
      <Footer />
    </>
  );
};
