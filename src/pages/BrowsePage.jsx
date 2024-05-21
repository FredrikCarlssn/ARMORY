import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useContract, useTotalCount } from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../CONST.js";
import { fetchTokenIds, fetchNFTs } from "../services/fetchTokenIds.js";

import { DisplayToken } from "../components/ui/DisplayToken.jsx";
import { Spinner } from "../components/ui/Spinner.jsx";
import { SortingSidebar } from "../components/MenuComponents/SortingSidebar.jsx";

import city from "../img/images/city-back-drop.jpg";
import softLight from "../img/images/soft-light-fog.png";
import { ArrowButton } from "../components/buttons/ArrowButton.jsx";

const StyledProfilePage = styled.div`
  background-image: url(${city});
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  animation: fadeIn 0.5s;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 2000px;
`;

const StyledTokenList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 50px;
  padding-bottom: 90px;
  justify-content: center;

  @media screen and (max-width: 870px) {
    padding-bottom: 150px;
    margin-left: -10px;
    justify-content: center;
  }
`;

const Background = styled.div`
  width: 100%;
  background-image: url(${softLight});
  background-size: cover;
  background-color: #1b1a20;
  position: relative;
  min-height: 80vh;

  @media screen and (max-width: 870px) {
    padding: 0px;
  }
`;

const Content = styled.div`
  @media screen and (max-width: 870px) {
  }
`;
export const BrowsePage = () => {
  // Filtered data array
  const [filteredNFTs, setFilteredNFTs] = useState([]);

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  // Pagination state
  const nftsPerPage = 20;
  const [count, setCount] = useState(0);
  const { contract: contractItems } = useContract(ITEMS_CONTRACT);
  const { data: totalCount } = useTotalCount(contractItems);
  const hasPreviousPage = count > 0;
  const hasNextPage = (count + 1) * nftsPerPage < totalCount;
  const totalPages = Math.ceil(totalCount / nftsPerPage);
  const [allNFTs, setAllNFTs] = useState([]);
  const [i, setI] = useState(0);
  const [displayedNfts, setDisplayedNfts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        fetchTokenIds()
          .then((tokenIds) => {
            return fetchNFTs(tokenIds);
          })
          .then((nfts) => {
            setAllNFTs(nfts);
          });
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setDisplayedNfts(
      filteredNFTs.slice(count * nftsPerPage, (count + 1) * nftsPerPage)
    );
  }, [count, filteredNFTs]);

  return (
    <StyledProfilePage>
      <ContentWrapper>
        <hr />
        <Background>
          <SortingSidebar
            isSidebarOpen={isSidebarOpen}
            nfts={allNFTs}
            setFilteredNFTs={setFilteredNFTs}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Content
            style={{
              marginLeft: isSidebarOpen ? "330px" : "30px",
              marginRight: "20px",
              transition: "all 0.3s",
              animation: "fadeIn 0.5s",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              {allNFTs.length == 0 ? (
                <div className="pt-12 absolute left-[calc(50%-80px)]">
                  <Spinner />
                </div>
              ) : displayedNfts.length == 0 ? (
                <div className="absolute left-[calc(50%-120px)] top-32 font-bold">
                  No NFTs were found matching your current filters.
                </div>
              ) : (
                <StyledTokenList>
                  {displayedNfts.map((token, i) => {
                    return (
                      <DisplayToken
                        name={token.metadata.name}
                        key={i}
                        linkTo={`token/${token.metadata.id}`}
                        img={token.metadata.image}
                        tokenID={token.metadata.id}
                        className=""
                      />
                    );
                  })}
                </StyledTokenList>
              )}
              {filteredNFTs.length > 20 ? (
                <div className="flex justify-center items-center gap-4 absolute bottom-4 left-[calc(50%-90px)]">
                  <ArrowButton
                    direction={"left"}
                    onClick={() => setCount(count - 1)}
                    disabled={!hasPreviousPage}
                  />
                  Page {count + 1} of {totalPages}
                  <ArrowButton
                    direction={"right"}
                    onClick={() => setCount(count + 1)}
                    disabled={!hasNextPage}
                  />
                </div>
              ) : null}
            </motion.div>
          </Content>
        </Background>
        <hr />
      </ContentWrapper>
    </StyledProfilePage>
  );
};

// <Dropdown
//                 Items={["Age", "Name", "Type"]}
//                 Title={"Sort"}
//                 activeItem={activeSort}
//                 setActiveItem={setActiveSort}
//               />
