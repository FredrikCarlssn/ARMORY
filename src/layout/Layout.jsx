import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { FooterV2 } from "./FooterV2";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="m:-mt-16">
        <Outlet />
      </main>
      <FooterV2 />
    </>
  );
};
