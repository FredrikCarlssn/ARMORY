import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useContract, useTotalCount } from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../CONST.js";
import { fetchTokenIds, fetchNFTs } from "../services/fetchTokenIds.js";

import { DisplayToken } from "../components/ui/DisplayToken.jsx";
import { Spinner } from "../components/ui/Spinner.jsx";
import { SortingSidebar } from "../components/MenuComponents/SortingSidebar.jsx";
import { ArrowButton } from "../components/buttons/ArrowButton.jsx";
import { thirdWebIPFSLink } from "../services/IPFSLink";

import city from "../img/images/city-back-drop.jpg";
import softLight from "../img/images/soft-light-fog.png";

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
  gap: 14px;
  justify-content: center;
  padding: 50px 30px 90px 30px;

  @media screen and (max-width: 870px) {
    padding-bottom: 100px;
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
          <div className="flex">
            <SortingSidebar
              isSidebarOpen={isSidebarOpen}
              nfts={allNFTs}
              setFilteredNFTs={setFilteredNFTs}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <div
              className="relative flex items-center justify-center w-full"
              style={{
                transition: "all 0.3s",
                animation: "fadeIn 0.5s",
                width: isSidebarOpen ? "calc(100vw - 300px)" : "100vw",
              }}
            >
              {allNFTs.length == 0 ? (
                <div className="pt-12">
                  <Spinner />
                </div>
              ) : displayedNfts.length == 0 ? (
                <div className="font-bold">
                  No NFTs were found matching your current filters.
                </div>
              ) : (
                <StyledTokenList
                  className=""
                  style={{
                    width: isSidebarOpen ? "calc(100vw - 300px)" : "100vw",
                  }}
                >
                  {displayedNfts.map((token, i) => {
                    return (
                      <DisplayToken
                        name={token.metadata.name}
                        key={i}
                        linkTo={`token/${token.metadata.id}`}
                        img={thirdWebIPFSLink(token.metadata.image)}
                        tokenID={token.metadata.id}
                      />
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
