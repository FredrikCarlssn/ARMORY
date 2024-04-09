import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ITEMS_CONTRACT, ABI_ITEMS } from "../CONST";
import { Web3 } from "web3";

import ScrollButton from "../components/ScrollButton";
import gamelogo from "../img/armory.png";

import { LatestMintedTokens } from "../components/LatestMintedTokens";

const StyledButton = styled.button`
  position: relative;
  margin-top: 20px;
  transform: scale(1.2);
  &:hover {
    transform: scale(1.21) !important;
  }
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

export const LandingPage = () => {
  const web3 = new Web3("https://13337.rpc.thirdweb.com");
  const contract = new web3.eth.Contract(ABI_ITEMS, ITEMS_CONTRACT);

  /// FUCNTION FOR SEARCHING BY ADDRESS OR TOKEN ID
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const newError = (errorMessage, duration) => {
    setError(errorMessage);
    setTimeout(() => {
      setError("");
    }, duration);
  };
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "50%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const handleChange = (event) => {
    setInput(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNumber = /^[0-9]+$/.test(input);
    if (input >= 0 && isNumber) {
      contract.methods
        .ownerOf(input)
        .call()
        .then(() => {
          navigate(`/token/${input}`);
        })
        .catch((error) => {
          newError("Token not found", 3000);
        });
    } else if (input === "") {
      newError("Enter Value", 3000);
    } else {
      const isValid = /^0x[0-9a-fA-F]{40}$/.test(input);
      if (isValid) {
        navigate(`/profile/${input}`);
      } else {
        newError(
          "Invalid address. It should start with 0x and followed by 40 hexadecimal characters.",
          3000
        );
      }
    }
  };

  return (
    <>
      <section className="relative flex justify-center items-center min-h-[97vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-[url('/src/img/armory_v1.png')]"
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
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <div className="bg-[url('/src/img/headline.png')] h-[98px] bg-cover w-[600px] flex justify-center">
                  <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    className="border-2 border-none bg-transparent text-center text-white text-xl focus:border-none outline-none w-full"
                    placeholder="Search by Address or Token ID"
                  />
                  {error ? (
                    <p className="text-red-500 text-sm absolute top-96 animate-pulse">
                      {error}
                    </p>
                  ) : null}
                </div>
                <StyledButton className="crg-button text-lg">
                  Search Armory
                </StyledButton>
              </form>
              <ScrollButton toSection={"page"} />
            </StyledDiv>
          </motion.div>
        </div>
      </section>
      <hr />
      <section className="h-screen bg-page p-10" id="page">
        <LatestMintedTokens />
      </section>
      <hr />
    </>
  );
};
