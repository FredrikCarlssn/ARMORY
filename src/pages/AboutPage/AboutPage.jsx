import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

import { SearchPage } from "./SearchPage";

import exampleNft from "../../img/images/example-nft.png";
import nexus from "../../img/images/nexus.png";
import downArrowLine from "../../img/ui/downArrowLineBlue.png";
import upArrowLine from "../../img/ui/upArrowLineBlue.png";

const Background = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1b1a20;
  min-height: 80vh;
  border-radius: 3px;
  padding-top: 0;

  @media screen and (max-width: 870px) {
    padding: 0;
  }
`;

const Game = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;

  @media screen and (max-width: 870px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  max-width: 1500px;

  @media screen and (max-width: 1000px) {
    transform: scale(0.7);
  }
`;

const StylediFrame = styled.iframe`
  width: 635px;
  height: 357px;
  @media screen and (max-width: 1000px) {
    width: 500px;
    height: 281px;
  }
`;

export const AboutPage = () => {
  const navigate = useNavigate();

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-100%", "60%"],
  });

  const translateY = useTransform(scrollYProgress, [0, 0.8], [0, -50]);
  const translateX = useTransform(scrollYProgress, [0, 0.8], [0, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.2]);

  const ref2 = useRef();
  const ref3 = useRef();
  const isInView = useInView(ref2);
  const isInView2 = useInView(ref3);
  const scale2 = useTransform(scrollYProgress, [0.6, 1], [1, 1.05]);
  const translateY2 = useTransform(scrollYProgress, [0.3, 1], [100, 0]);
  return (
    <Background>
      <Content>
        <SearchPage />
        <div className="relative flex flex-col items-center py-24">
          <div className="mr-64 w-7/12">
            <h1 className="text-4xl font-bold">A Story in Season</h1>
            <p className="">
              Centuries ago, a catastrophic event struck the world of Naramunz,
              turning it into post-apocalyptic ruin called “NEXUS”. The event
              caused the world to split into separate, floating islands and its
              inhabitants to mutate with animals. The collision resulted in the
              scattering of glowing blue crystals rife with power which became
              the primary source of energy in the world. The Nexus is a
              recurring global event in the game that acts as a seasonal reset,
              wiping the possessions and memories of all characters. Only the
              legendary Aetherials items survive.
            </p>
          </div>
          <motion.img
            style={{ translateY, translateX, scale }}
            ref={ref}
            src={nexus}
            className="absolute -bottom-6 right-0 h-[500px] w-[300px]"
          />
        </div>
        <img src={upArrowLine} className="w-full -my-3 h-12" />
        <div
          ref={ref2}
          className="flex justify-center min-h-[527px] bg-lightBlue bg-[url('/src/img/images/dungeon.png')] bg-blend-soft-light bg-cover p-20 -mt-3"
        >
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex flex-col justify-center mr-10 text-lg w-4/12"
          >
            <h1 className="text-4xl ml-4 mb-4 font-bold">Sealed Items</h1>
            <p>
              (Feature Coming Soon)
              <br />
              Imbued with the resilience to transcend seasonal resets, sealed
              items offer their holders the power of trade in the bustling open
              market. Venture into the heart of the artisan shop, where items
              are imbued with newfound power, enhancing their quality and
              rarity, unlocking hidden modifications and amplifying their stats,
              unveiling untold power in the mystical world. Manipulate the
              essence of your weapon, rerolling and appending affixes, to morph
              its abilities and shape your destiny in the realms.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              scale: scale2,
              translateY: !isInView2 ? translateY2 : 0,
            }}
            src={exampleNft}
            className="w-96  hover:cursor-pointer"
            onClick={() => {
              navigate("/token/111111111111111111113");
            }}
          />
        </div>
        <img src={downArrowLine} className="w-full h-12 -mt-3" ref={ref3} />
        <Game>
          <div className="px-10 pt-10 pb-20">
            <StylediFrame
              className="youtube-player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Crystals of Naramunz │ Upcoming steampunk Action RPG"
              src="https://www.youtube.com/embed/ihDAvgNi_n4?controls=1&amp;rel=0&amp;playsinline=1&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.naramunz.com&amp;widgetid=1&mute=1"
              id="widget2"
              data-gtm-yt-inspected-16="true"
            ></StylediFrame>
          </div>
          <div className="ml-8 text-lg">
            <h1 className="text-4xl ml-8 mb-4 font-bold">About the game</h1>
            <p className="mx-4">
              Crystals of Naramunz is an upcoming free-to-play action RPG set in
              the post-apocalyptic steampunk world of Naramunz. The game is
              currently in Alpha. Inspired by Diablo and Path of Exile, Crystals
              of Naramunz offers an exciting gaming experience, a well-crafted
              barter economy, and characters with unique skills and talents.
              Ensuring high re-playability, the game utilizes seasonal rest,
              introducing new content to its players.
            </p>
          </div>
        </Game>
      </Content>
      <hr />
    </Background>
  );
};