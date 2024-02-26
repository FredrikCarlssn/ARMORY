import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import city from "../img/city.png";
import card from "../img/card.png";
import merchant from "../img/merchant.png";
import gamelogo from "../img/con-web-logo.png";
import horisontalLine from "../img/Line-fade-300.png";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const StyledButton = styled.button`
  position: relative;
  margin-top: 20px;
  transform: scale(1.2);
  &:hover {
    transform: scale(1.25) !important;
  }
`;

const StyledH1 = styled.h1`
  all: unset;
  position: absolute;
  margin-top: 26px;
  right: 38%;
  font-size: 2rem;
  font-weight: 900;
  text-shadow: -2px 2px 5px rgb(34, 0, 226);
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 100px;
  padding: 10px 30px;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    transform: scale(0.5);
  }
`;

const StyledHl = styled.img`
  width: 700px;
`;

export const LandingPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "50%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const ref2 = useRef();
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
  });
  const y = useTransform(scrollYProgress2, [0, 1], ["-90%", "90%"]);

  const ref3 = useRef(null);
  const isInView = useInView(ref3);

  const [scale2, setScale2] = useState(1);
  useEffect(() => {
    setScale2(1);
  }, [isInView]);

  return (
    <>
      <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-[url('/src/img/city.png')]"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ scale }}
        />
        <div className="relative flex flex-col justify-center items-center h-full">
          <motion.div
            className="flex flex-col items-center justify-center"
            transition={{ duration: 1.5, style: "easeInOut" }}
            exit={{ opacity: 0 }}
          >
            <StyledDiv>
              <img className="h-80 max-w-none" src={gamelogo} alt="city" />
              <div className="bg-[url('/src/img/headline.png')] h-24 bg-cover w-full relative">
                <StyledH1>ARMORY</StyledH1>
              </div>
              <NavLink to={"/Search"}>
                <StyledButton className="crg-button">Search</StyledButton>
              </NavLink>
            </StyledDiv>
          </motion.div>
        </div>
      </section>
      <section className="relative min-h-screen bg-slate-800 overflow-hidden bg-[url('/src/img/merchant-banner.png')] bg-cover">
        <hr />
        <motion.div
          className="absolute inset-0 bg-cover bg-[url('/src/img/soft-light-fog.png')]"
          style={{ y }} // apply the x transform
        />
        <div className="relative flex flex-col items-center justify-center h-full my-10">
          <h1 className="relative text-4xl font-bold text-center">
            Welcome to Armory
          </h1>
          <StyledHl src={horisontalLine} />
          <br />
          <p className="text-center text-xl mx-20">
            Aetherials are a special class of items that transcend gameplay and
            survive the seasonal resets. Craft, trade and utilize these
            extraordinary assets within the game and on the open market.
          </p>
          <div
            ref={ref3}
            className="flex justify-center items-center m-20 gap-8"
          >
            {isInView ? (
              <>
                <motion.div
                  alt="card"
                  className="bg-[url('/src/img/card.png')] bg-cover h-96 w-80 flex justify-start flex-col pt-4 "
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <h1 className="flex justify-center">Collect</h1>
                  <p className="m-8 flex justify-center">
                    Uncover a treasure trove of abilities with our lootable
                    skills and items. Scavange the many dungeons and worlds to
                    discover mysteries and powerful items.
                  </p>
                </motion.div>
                <motion.div
                  alt="card"
                  className="bg-[url('/src/img/card.png')] bg-cover h-96 w-80 flex justify-start flex-col pt-4 relative overflow-hidden "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, scale: scale2 }}
                  transition={{ duration: 2.5 }}
                  onAnimationComplete={() => setScale2(1.05)}
                >
                  <h1 className="flex justify-center">Trade</h1>
                  <p className="m-8 flex justify-center">
                    Trade your NFTs on the open market. Utilize the power of the
                    blockchain to safely and securely trade your items with
                    other players.
                  </p>
                  <img
                    src={merchant}
                    alt=""
                    className="absolute h-30 bottom-2 overflow-hidden"
                  />
                </motion.div>
                <motion.div
                  alt="card"
                  className="bg-[url('/src/img/card.png')] bg-cover h-96 w-80 justify-start flex-col pt-4"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <h1 className="flex justify-center">Upgrade</h1>
                  <p className="m-8 flex justify-center">
                    Gain experience and unlock new powers to form synergies with
                    your items and skills. Fuse crystals to upgrade their powers
                    and tailor them to your build and playstyle.
                  </p>
                </motion.div>
              </>
            ) : null}
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};
