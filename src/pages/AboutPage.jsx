import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

import city from "../img/city-back-drop.jpg";
import softLight from "../img/heavy-fog.png";
import exampleNft from "../img/example-nft.png";
import nexus from "../img/nexus.png";
import horisontalLine from "../img/Line-fade-300.png";

const StyledAboutPage = styled.div`
  background-image: url(${city});
  min-height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  padding: 120px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
`;

const Background = styled.div`
  /* background-image: url(${softLight});
  background-size: cover;
  background-position: bottom;
  background-blend-mode: multiply;
  backdrop-filter: brightness(0.7) contrast(1) blur(10px); */
  background-color: #1b1a20;
  min-height: 80vh;
  padding: 50px;
  border-radius: 3px;

  @media screen and (max-width: 870px) {
    padding: 0;
  }
`;

const Game = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 870px) {
    flex-direction: column;
  }
`;

const StyledH1 = styled.h1`
  padding-left: 15px;
`;

const YoutubePlayer = styled.div``;

const StyledImg = styled.img`
  width: 500px;

  @media screen and (max-width: 870px) {
    margin-top: -180px;
  }
`;

const Content = styled.div`
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

const StyledHr = styled.hr`
  @media screen and (max-width: 870px) {
    margin-top: -10px;
  }
`;

export const AboutPage = () => {
  const navigate = useNavigate();

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["10%", "60%"],
  });
  const translateY = useTransform(scrollYProgress, [0, 0.8], [-50, 0]);
  const translateX = useTransform(scrollYProgress, [0, 0.8], [-30, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1.2, 1]);

  const ref2 = useRef();
  const isInView = useInView(ref2);
  const scale2 = useTransform(scrollYProgress, [0.5, 1], [1, 1.05]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  return (
    <StyledAboutPage>
      <ContentWrapper>
        <hr />
        <Background>
          <Content>
            <div className="relative flex flex-col items-center h-64">
              <div className="mr-64 w-7/12">
                <h1 className="text-4xl font-bold">A Story in Season</h1>
                <p className="">
                  Centuries ago, a catastrophic event struck the world of
                  Naramunz, turning it into post-apocalyptic ruin called
                  “NEXUS”. The event caused the world to split into separate,
                  floating islands and its inhabitants to mutate with animals.
                  The collision resulted in the scattering of glowing blue
                  crystals rife with power which became the primary source of
                  energy in the world. The Nexus is a recurring global event in
                  the game that acts as a seasonal reset, wiping the possessions
                  and memories of all characters. Only the legendary Aetherials
                  items survive.
                </p>
              </div>
              <motion.img
                style={{ translateY, translateX, scale }}
                ref={ref}
                src={nexus}
                className="absolute -bottom-4 -right-12 h-[500px] w-[300px]"
              />
            </div>
            <img src={horisontalLine} className="w-full my-4 h-1.5" />
            <div ref={ref2} className="flex justify-center min-h-[527px]">
              {isInView ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="flex flex-col justify-center mr-10 text-lg w-4/12"
                  >
                    <h1 className="text-4xl ml-4 mb-4 font-bold">
                      Sealed Items
                    </h1>
                    <p>
                      (Feature Coming Soon)
                      <br />
                      Imbued with the resilience to transcend seasonal resets,
                      sealed items offer their holders the power of trade in the
                      bustling open market. Venture into the heart of the
                      artisan shop, where items are imbued with newfound power,
                      enhancing their quality and rarity, unlocking hidden
                      modifications and amplifying their stats, unveiling untold
                      power in the mystical world. Manipulate the essence of
                      your weapon, rerolling and appending affixes, to morph its
                      abilities and shape your destiny in the realms.
                    </p>
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    style={{ scale: scale2, translateY: translateY2 }}
                    src={exampleNft}
                    className="w-96  hover:cursor-pointer mt-10"
                    onClick={() => {
                      navigate("/token/111111111111111111113");
                    }}
                  />
                </>
              ) : null}
            </div>
            <img src={horisontalLine} className="w-full my-10 h-1.5" />
            <Game>
              <YoutubePlayer>
                <StylediFrame
                  className="youtube-player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="Crystals of Naramunz │ Upcoming steampunk Action RPG"
                  src="https://www.youtube.com/embed/ihDAvgNi_n4?controls=1&amp;rel=0&amp;playsinline=1&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.naramunz.com&amp;widgetid=1&mute=1"
                  id="widget2"
                  data-gtm-yt-inspected-16="true"
                ></StylediFrame>
              </YoutubePlayer>
              <div className="ml-8 text-lg">
                <h1 className="text-4xl ml-8 mb-4 font-bold">About the game</h1>
                <p className="mx-4">
                  Crystals of Naramunz is an upcoming free-to-play action RPG
                  set in the post-apocalyptic steampunk world of Naramunz. The
                  game is currently in Alpha. Inspired by Diablo and Path of
                  Exile, Crystals of Naramunz offers an exciting gaming
                  experience, a well-crafted barter economy, and characters with
                  unique skills and talents. Ensuring high re-playability, the
                  game utilizes seasonal rest, introducing new content to its
                  players.
                </p>
              </div>
            </Game>
          </Content>
        </Background>
        <StyledHr />
      </ContentWrapper>
    </StyledAboutPage>
  );
};
