import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ITEMS_CONTRACT, ABI_ITEMS } from "../CONST";
import { Web3 } from "web3";

import ScrollButton from "../components/ScrollButton";
import gamelogo from "../img/armory.png";
import horisontalLine from "../img/Line-fade-300.png";

const StyledButton = styled.button`
  position: relative;
  margin-top: 20px;
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

const StyledHl = styled.img`
  width: 700px;
`;

export const LandingPage = () => {
  const web3 = new Web3("https://13337.rpc.thirdweb.com");
  const contract = new web3.eth.Contract(ABI_ITEMS, ITEMS_CONTRACT);

  const ref3 = useRef(null);
  const isInView = useInView(ref3);
  const [scale2, setScale2] = useState(1);
  useEffect(() => {
    setScale2(1);
  }, [isInView]);

  const [address, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  const newError2 = (errorMessage, duration) => {
    setError2(errorMessage);
    setTimeout(() => {
      setError2("");
    }, duration);
  };
  const newError3 = (errorMessage, duration) => {
    setError3(errorMessage);
    setTimeout(() => {
      setError3("");
    }, duration);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    newError3("");
  };

  const handleTokenIdChange = (event) => {
    setTokenId(event.target.value);
    newError2("");
  };

  const handleTokenSubmit = (event) => {
    event.preventDefault();

    if (tokenId >= 0 && tokenId != "") {
      contract.methods
        .ownerOf(tokenId)
        .call()
        .then(() => {
          navigate(`/token/${tokenId}`);
        })
        .catch((error) => {
          newError2("Token not found", 3000);
        });
    } else {
      newError2("Please enter a valid token ID.", 3000);
    }
  };

  const handleAddressSubmit = (event) => {
    event.preventDefault();

    const isValid = /^0x[0-9a-fA-F]{40}$/.test(address);

    if (isValid) {
      navigate(`/profile/${address}`);
    } else {
      newError3(
        "Invalid address. It should start with 0x and followed by 40 hexadecimal characters.",
        3000
      );
    }
  };

  const ref2 = useRef();
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
  });
  const y = useTransform(scrollYProgress2, [0, 2], ["0%", "100%"]);

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
        <div className="relative flex flex-col justify-center items-center h-full scale-110">
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
                    placeholder="Search by wallet address or token id"
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
            </StyledDiv>
          </motion.div>
        </div>
      </section>
      <section
        className="w-full relative min-h-screen bg-slate-800 overflow-hidden bg-[url('/src/img/merchant-banner.png')] bg-cover"
        id="welcome"
      >
        <hr />
        <motion.div
          className="absolute inset-0 bg-cover bg-[url('/src/img/heavy-fog.png')]"
          style={{ y }} // apply the x transform
        />
        <div className="relative flex flex-col items-center justify-center h-full my-10">
          <h1 className="relative text-4xl font-bold text-center">
            Welcome to Armory
          </h1>
          <StyledHl src={horisontalLine} />
          <br />
          <p className="text-center text-xl w-2/4">
            Dive into the treasure trove
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
                  <h1 className="flex justify-center">Address</h1>
                  <p className="m-8 flex justify-center">
                    Your address is a cryptographic fingerprint tailored for
                    each account, starting with the essential '0x' followed by
                    40 distinct hexadecimal characters.
                    <br />
                    <br />
                    You can locate your address by accessing your in-game
                    profile.
                  </p>
                </motion.div>
                <motion.div
                  alt="card"
                  className="bg-[url('/src/img/card.png')] bg-cover h-96 w-80 flex justify-start flex-col pt-4 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, scale: scale2 }}
                  transition={{ duration: 2.5 }}
                  onAnimationComplete={() => setScale2(1.05)}
                >
                  <h1 className="flex justify-center">Search</h1>
                  <div className=" flex flex-col h-5/6 mt-4 justify-center">
                    <form
                      onSubmit={handleAddressSubmit}
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
                      {error3 && (
                        <p className="text-red-500 text-sm ml-4 mr-4 -mb-2 animate-pulse">
                          {error3}
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
                      {error2 && (
                        <p className="text-red-500 animate-pulse">{error2}</p>
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
                  className="bg-[url('/src/img/card.png')] bg-cover h-96 w-80 justify-start flex-col pt-4"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <h1 className="flex justify-center">Token ID</h1>
                  <p className="m-8 flex justify-center">
                    Token ID serves as a unique identifier assigned to each
                    sealed item crafted within the game. It ensures that every
                    item possesses its own distinct identity.
                    <br />
                    <br />
                    The Token ID is accessible when examining each sealed item
                    within the game interface.
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
