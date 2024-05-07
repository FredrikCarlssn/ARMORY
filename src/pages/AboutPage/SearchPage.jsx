import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import horisontalLine from "../../img/ui/Line-fade-300.png";

const StyledHl = styled.img`
  width: 700px;
`;

export const SearchPage = () => {
  const [address, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const navigate = useNavigate();
  const newError = (errorMessage, duration) => {
    if (error2) setError2("");
    setError(errorMessage);
    setTimeout(() => {
      setError("");
    }, duration);
  };
  const newError2 = (errorMessage, duration) => {
    if (error) setError("");
    setError2(errorMessage);
    setTimeout(() => {
      setError2("");
    }, duration);
  };
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleTokenIdChange = (event) => {
    setTokenId(event.target.value);
  };

  const handleTokenSubmit = (event) => {
    event.preventDefault();

    if (tokenId >= 0 && tokenId != "") {
      console.log(tokenId);
      navigate(`/token/${tokenId}`);
    } else {
      newError("Please enter a valid token ID.", 8000);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = /^0x[0-9a-fA-F]{40}$/.test(address);

    if (isValid) {
      navigate(`/profile/${address}`);
    } else {
      newError2(
        "Invalid address. It should start with 0x and followed by 40 hexadecimal characters.",
        8000
      );
    }
  };

  const ref3 = useRef(null);

  const [scale2, setScale2] = useState(1);

  const ref2 = useRef();
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
  });
  const y = useTransform(scrollYProgress2, [0, 1], ["0%", "100%"]);

  return (
    <>
      <section
        className="w-full relative min-h-screen bg-slate-800 overflow-hidden bg-[url('/src/img/images/merchant-banner.png')] bg-cover"
        id="welcome"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-[url('/src/img/images/heavy-fog.png')]"
          style={{ y }}
        />
        <div className="relative flex flex-col items-center justify-center h-full my-10 pt-20">
          <h1 className="relative text-4xl font-bold text-center">
            Journey into Knowledge
          </h1>
          <StyledHl src={horisontalLine} />
          <br />
          <p className="text-center text-xl w-2/4">
            Explore the treasure trove
          </p>
          <div
            ref={ref3}
            className="flex justify-center items-center m-20 gap-8"
          >
            <motion.div
              alt="card"
              className="bg-[url('/src/img/ui/card.png')] bg-cover h-96 w-80 flex justify-start flex-col pt-4 "
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <h1 className="flex justify-center">Address</h1>
              <p className="m-8 flex justify-center">
                Your address is a cryptographic fingerprint tailored for each
                account, starting with the essential '0x' followed by 40
                distinct hexadecimal characters.
                <br />
                <br />
                You can locate your address by accessing your in-game profile.
              </p>
            </motion.div>
            <motion.div
              alt="card"
              className="bg-[url('/src/img/ui/card.png')] bg-cover h-96 w-80 flex justify-start flex-col pt-4 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, scale: scale2 }}
              transition={{ duration: 2.5 }}
              onAnimationComplete={() => setScale2(1.05)}
            >
              <h1 className="flex justify-center">Search</h1>
              <div className=" flex flex-col h-5/6 mt-4 justify-center">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center"
                >
                  <label className="mb-2">
                    {" "}
                    <input
                      type="text"
                      value={address}
                      onChange={handleAddressChange}
                      className="border-2 border-gray-300 p-2 rounded-md text-center"
                      placeholder="Address: 0x..."
                    />
                  </label>
                  {error2 && (
                    <p className="text-red-500 text-sm ml-4 mr-4 -mb-2 animate-pulse">
                      {error2}
                    </p>
                  )}
                  <input
                    type="submit"
                    value="Search Address"
                    className="bg-blue-500 text-white p-2 rounded-md crg-button scale-75"
                  />
                </form>
                <form
                  onSubmit={handleTokenSubmit}
                  className="flex flex-col items-center mt-4"
                >
                  <label className="mb-2">
                    <input
                      type="number"
                      value={tokenId}
                      onChange={handleTokenIdChange}
                      className="border-2 border-gray-300 p-2 rounded-md text-center"
                      placeholder=" Token ID"
                    />
                  </label>
                  {error && (
                    <p className="text-red-500 animate-pulse">{error}</p>
                  )}
                  <input
                    type="submit"
                    value="Search Token ID"
                    className="bg-blue-500 text-white p-2 rounded-md crg-button scale-75"
                  />
                </form>
              </div>
            </motion.div>
            <motion.div
              alt="card"
              className="bg-[url('/src/img/ui/card.png')] bg-cover h-96 w-80 justify-start flex-col pt-4"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <h1 className="flex justify-center">Token ID</h1>
              <p className="m-8 flex justify-center">
                Token ID serves as a unique identifier assigned to each sealed
                item crafted within the game. It ensures that every item
                possesses its own distinct identity.
                <br />
                <br />
                The Token ID is accessible when examining each sealed item
                within the game interface.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};