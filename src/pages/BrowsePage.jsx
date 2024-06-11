import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useContract, useTotalCount } from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../CONST.js";
import { fetchTokenIds, fetchNFTs } from "../services/fetchTokenIds.js";
import { motion } from "framer-motion";

import { DisplayToken } from "../components/ui/DisplayToken.jsx";
import { Spinner } from "../components/ui/Spinner.jsx";
import { SortingSidebar } from "../components/MenuComponents/SortingSidebar.jsx";
import { ArrowButton } from "../components/buttons/ArrowButton.jsx";
import { thirdWebIPFSLink } from "../services/IPFSLink";

import city from "../img/images/city-back-drop.webp";
import softLight from "../img/images/soft-light-fog.webp";

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

const StyledTokenList = styled(motion.ul)`
  display: grid;
  justify-content: center;
  align-content: start;
  gap: 5px;
  padding: 50px 30px 90px 30px;
  width: 100%;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));
  grid-auto-rows: 251px;
  align-content: start;
  justify-items: center;

  @media screen and (max-width: 870px) {
    padding-bottom: 100px;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 150px), 1fr));
    grid-auto-rows: 189px;
  }
`;

const Background = styled.div`
  width: 100%;
  background-image: url(${softLight});
  background-size: cover;
  background-color: #1b1a20;
  min-height: 80vh;
  position: relative;
  height: 100%;

  @media screen and (max-width: 870px) {
    padding: 0px;
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

  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, []);

  return (
    <StyledProfilePage>
      <ContentWrapper>
        <hr />
        <Background>
          <div className="flex h-full">
            <SortingSidebar
              isSidebarOpen={isSidebarOpen}
              nfts={allNFTs}
              setFilteredNFTs={setFilteredNFTs}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <div
              className="flex items-start justify-center"
              style={{
                transition: "all 0.3s",
                animation: "fadeIn 0.5s",
                width: isSidebarOpen ? "calc(100% - 300px)" : "100%",
              }}
            >
              {allNFTs.length == 0 ? (
                <div className="pt-12">
                  <Spinner />
                </div>
              ) : displayedNfts.length == 0 ? (
                <div className="font-bold mt-36">
                  No NFTs were found matching your current filters.
                </div>
              ) : (
                <StyledTokenList
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    damping: 16,
                  }}
                >
                  {displayedNfts.map((token, i) => {
                    return (
                      <motion.li
                        layoutId={`item-${token.metadata.id}`}
                        key={token.metadata.id}
                      >
                        <DisplayToken
                          name={token.metadata.name}
                          linkTo={`token/${token.metadata.id}`}
                          img={thirdWebIPFSLink(token.metadata.image)}
                          tokenID={token.metadata.id}
                        />
                      </motion.li>
                    );
                  })}
                </StyledTokenList>
              )}
            </div>
            {filteredNFTs.length > 20 ? (
              <div className="flex justify-center items-center gap-4 absolute bottom-4 left-[calc(50%-90px)]">
                <ArrowButton
                  direction={"left"}
                  onClick={() => {
                    setCount(count - 1);
                    window.scrollTo({ top: 100, behavior: "smooth" });
                  }}
                  disabled={!hasPreviousPage}
                />
                Page {count + 1} of {totalPages}
                <ArrowButton
                  direction={"right"}
                  onClick={() => {
                    setCount(count + 1);
                    window.scrollTo({ top: 100, behavior: "smooth" });
                  }}
                  disabled={!hasNextPage}
                />
              </div>
            ) : null}
          </div>
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