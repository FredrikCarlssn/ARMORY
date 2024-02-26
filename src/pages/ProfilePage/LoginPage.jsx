import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import city from "../../img/city-back-drop.jpg";
import softLight from "../../img/soft-light-fog.png";

const StyledProfilePage = styled.div`
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
  background-image: url(${softLight});
  background-size: cover;
  background-position: bottom;
  backdrop-filter: brightness(0.8) blur(10px);
  min-height: 80vh;
  padding: 50px;
  border-radius: 3px;

  @media screen and (max-width: 870px) {
    padding: 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1500px;
  @media screen and (max-width: 870px) {
    transform: scale(0.7);
  }
`;

export const LoginPage = () => {
  const [address, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    setError2("");
  };

  const handleTokenIdChange = (event) => {
    setTokenId(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = /^0x[0-9a-fA-F]{40}$/.test(address);

    if (isValid) {
      navigate(`/profile/${address}`);
    } else {
      setError2(
        "Invalid address. It should start with 0x and followed by 40 hexadecimal characters."
      );
    }
  };

  const handleTokenSubmit = (event) => {
    event.preventDefault();

    if (tokenId >= 0) {
      navigate(`/token/${tokenId}`);
    } else {
      setError("Please enter a valid token ID.");
    }
  };

  return (
    <StyledProfilePage>
      <ContentWrapper>
        <hr />
        <Background>
          <Content>
            <div className="flex justify-center w-full h-full">
              <motion.div
                alt="card"
                className="bg-[url('/src/img/card.png')] bg-cover h-96 w-80"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="flex mt-3 justify-center">Search</h1>
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
                      <p className="text-red-500 text-sm ml-4 mr-4 -mb-2">
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
                    {error && <p className="text-red-500">{error}</p>}
                    <input
                      type="submit"
                      value="Search Token"
                      className="bg-blue-500 text-white p-2 rounded-md crg-button scale-75"
                    />
                  </form>
                </div>
              </motion.div>
            </div>
          </Content>
        </Background>
        <hr />
      </ContentWrapper>
    </StyledProfilePage>
  );
};
