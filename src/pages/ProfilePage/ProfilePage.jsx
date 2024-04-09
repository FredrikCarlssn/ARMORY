import { styled } from "styled-components";
import { useOwnedNFTs, useContract } from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../../CONST.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { DisplayToken } from "../../components/DisplayToken.jsx";
import { Spinner } from "../../components/Spinner.jsx";
import { Dropdown } from "../../components/Dropdown.jsx";
import { Header } from "../../layout/Header.jsx";

import city from "../../img/city-back-drop.jpg";
import softLight from "../../img/soft-light-fog.png";
import horisontalLine from "../../img/Line-fade-300.png";
import { useParams } from "react-router";

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

const StyledTokenList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
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

const Account = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b1a20;
  border: 4px solid #694e43;
  padding: 0 20px;
`;

const StyledP = styled.p`
  all: unset;
  transition: 0.2s ease;
  &:hover {
    color: #b7a99c;
  }
`;

const StyledH2 = styled.h2`
  all: unset;
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

const StyledImg = styled.img`
  width: 350px;
  transform: scaleY(3);
  filter: brightness(1.7) contrast(1.5);
`;

const Content = styled.div`
  @media screen and (max-width: 870px) {
    transform: scale(0.7);
  }
`;
export const ProfilePage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const address = useParams().address;
  const { contract: contractItems } = useContract(ITEMS_CONTRACT);
  const { data, isLoading, error } = useOwnedNFTs(contractItems, address);
  const [activeSort, setActiveSort] = useState("Age");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (data) {
      let currentData = [...data];
      if (activeSort === "Age") {
        currentData.sort(
          (a, b) => a.metadata.originallyMinted - b.metadata.originallyMinted
        );
      }
      if (activeSort === "Name") {
        currentData.sort((a, b) =>
          a.metadata.name.localeCompare(b.metadata.name)
        );
      }
      if (activeSort === "Type") {
        currentData.sort((a, b) =>
          a.metadata.type.localeCompare(b.metadata.type)
        );
      }
      if (activeFilter === "All") {
        setFilteredData(currentData);
      }
      if (activeFilter === "Items") {
        setFilteredData(
          currentData.filter((token) => {
            return token.metadata.type == "Item";
          })
        );
      }
      if (activeFilter === "Skills") {
        setFilteredData(
          currentData.filter((token) => {
            return token.metadata.type == "Skill";
          })
        );
      }
    }
  }, [activeSort, activeFilter, data]);

  if (isLoading)
    return (
      <>
        <Header />
        <StyledProfilePage>
          <ContentWrapper>
            <hr />
            <Background>
              <Content>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Account>
                    <StyledH2>Viewing account:</StyledH2>
                    <StyledImg src={horisontalLine} style={{ marginTop: 10 }} />
                    <StyledP>{address}</StyledP>
                    <StyledImg
                      src={horisontalLine}
                      style={{ marginBottom: 10 }}
                    />
                  </Account>
                </motion.div>
                <h2>Owned NFTs:</h2>
                <Spinner />
              </Content>
            </Background>
            <hr />
          </ContentWrapper>
        </StyledProfilePage>
      </>
    );
  if (data == 0) {
    return (
      <>
        <Header />
        <StyledProfilePage>
          <ContentWrapper>
            <hr />
            <Background>
              <Content>
                <Account>
                  <StyledH2>Viewing account:</StyledH2>
                  <StyledImg src={horisontalLine} style={{ marginTop: 10 }} />
                  <StyledP>{address}</StyledP>
                  <StyledImg
                    src={horisontalLine}
                    style={{ marginBottom: 10 }}
                  />
                </Account>
                <h2 className="mt-4">Owned Tokens:</h2>
                <StyledP>
                  Oooopsss, looks like you dont own any tokens yet!
                </StyledP>
              </Content>
            </Background>
            <hr />
          </ContentWrapper>
        </StyledProfilePage>
      </>
    );
  }

  return (
    <>
      <Header />
      <StyledProfilePage>
        <ContentWrapper>
          <hr />
          <Background>
            <Content>
              <Account className="mb-2">
                <StyledH2>Viewing account:</StyledH2>
                <StyledImg src={horisontalLine} style={{ marginTop: 10 }} />
                <StyledP>{address}</StyledP>
                <StyledImg src={horisontalLine} style={{ marginBottom: 10 }} />
              </Account>
              <div className="absolute end-12">
                <Dropdown
                  Items={["Age", "Name"]}
                  Title={"Sort"}
                  activeItem={activeSort}
                  setActiveItem={setActiveSort}
                />
              </div>
              <h2 className="mt-20">Owned NFTs:</h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <StyledTokenList>
                  {filteredData.map((token, i) => {
                    return (
                      <DisplayToken
                        name={token.metadata.name}
                        key={i}
                        linkTo={`token/${token.metadata.id}`}
                        img={token.metadata.image}
                        tokenID={token.metadata.id}
                      />
                    );
                  })}
                </StyledTokenList>
              </motion.div>
            </Content>
          </Background>
          <hr />
        </ContentWrapper>
      </StyledProfilePage>
    </>
  );
};
