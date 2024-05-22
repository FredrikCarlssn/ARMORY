import { styled } from "styled-components";
import { useOwnedNFTs, useContract, useTotalCount } from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../../CONST.js";
import { useState } from "react";
import { useParams } from "react-router";

import { DisplayToken } from "../../components/ui/DisplayToken.jsx";
import { Spinner } from "../../components/ui/Spinner.jsx";
import { SortingSidebar } from "../../components/MenuComponents/SortingSidebar.jsx";
import { Expandable } from "../../components/buttons/Expandable.jsx";
import { ConnectedWallet } from "../../components/ui/ConnectedWallet.jsx";
import { ArrowButton } from "../../components/buttons/ArrowButton.jsx";

import softLight from "../../img/images/soft-light-fog.png";
import vault from "../../img/images/vault.png";
import epicLogoWhite from "../../img/buttons/epicLogoWhite.png";
import bigTextBox from "../../img/ui/big-text-box.png";
import conWebLogo from "../../img/images/con-web-logo.png";

const StyledProfilePage = styled.div`
  background-image: url(${vault});
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

const Background = styled.div`
  background-image: url(${softLight});
  background-size: cover;
  position: relative;
  background-color: #1b1a20;
  min-height: 80vh;

  @media screen and (max-width: 870px) {
    padding: 0px;
  }
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

export const ProfilePage = () => {
  // ADDRESS LOGIC
  const [address, setAddress] = useState(
    useParams().address ||
      (localStorage.getItem("walletAddress") &&
        localStorage.getItem("walletAddress").replace(/"/g, ""))
  );

  const loginWithEpic = async () => {
    const url = `https://www.epicgames.com/id/authorize?client_id=${process.env.REACT_APP_EPIC_CLIENT_ID}&response_type=code&scope=basic_profile&redirect_uri=${process.env.REACT_APP_EPIC_REDIRECT}`;
    window.open(url, "_self");
  };

  // SIDEBAR LOGIC
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [filteredNFTs, setFilteredNFTs] = useState([]);

  // THIRDWEB
  const { contract: contractItems } = useContract(ITEMS_CONTRACT);

  const { data: nfts, isLoading } = useOwnedNFTs(contractItems, address);

  const nftsPerPage = 20;
  const [count, setCount] = useState(0);
  const { data: totalCount } = useTotalCount(contractItems);
  const hasPreviousPage = count > 0;
  const hasNextPage = (count + 1) * nftsPerPage < totalCount;
  const totalPages = Math.ceil(totalCount / nftsPerPage);
  const [allNFTs, setAllNFTs] = useState([]);
  const [i, setI] = useState(0);
  const [displayedNfts, setDisplayedNfts] = useState([]);

  if (address || address == "") {
    return (
      <StyledProfilePage>
        <ContentWrapper>
          <hr />
          <Background>
            <SortingSidebar
              isSidebarOpen={isSidebarOpen}
              nfts={nfts}
              setFilteredNFTs={setFilteredNFTs}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <div
              style={{
                marginLeft: isSidebarOpen ? "330px" : "30px",
                marginRight: "20px",
                transition: "all 0.5s",
                animation: "fadeIn 0.5s",
              }}
            >
              <Expandable
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                className={""}
              />
              <div className="pt-14">
                <div className="flex justify-center">
                  <ConnectedWallet wallet={address} className="m:scale-50" />
                </div>
                <StyledTokenList>
                  {isLoading && address != "undefined" && address != "" ? (
                    <Spinner className="mt-12" />
                  ) : !nfts && address != "undefined" && address != "" ? (
                    <div className="flex justify-center font-bold mt-10">
                      There are no NFTs associated with your account.
                    </div>
                  ) : filteredNFTs.length == 0 &&
                    address != "undefined" &&
                    address != "" ? (
                    <div className="flex justify-center font-bold mt-10">
                      No NFTs were found matching your current filters.
                    </div>
                  ) : (
                    <>
                      {filteredNFTs.map((token, i) => {
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
                    </>
                  )}
                </StyledTokenList>
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
              </div>
            </div>
          </Background>
          <hr />
        </ContentWrapper>
      </StyledProfilePage>
    );
  }

  return (
    <StyledProfilePage>
      <ContentWrapper>
        <hr />
        <Background>
          <div className="h-[80vh] flex flex-col items-center justify-center m:scale-75">
            <div
              className="flex flex-col items-center px-20 py-32 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${bigTextBox})` }}
            >
              <div className="w-72 flex items-center justify-center relative -mt-4">
                <img src={conWebLogo} className=" w-60 object-contain z-10" />
              </div>
              <h1 className="text-xl mb-6">Sign in with Epic Games</h1>
              <div
                className="h-32 w-80 flex items-center justify-center crg-button scale-125"
                onClick={loginWithEpic}
              >
                <img src={epicLogoWhite} className="h-8" />
              </div>
            </div>
          </div>
        </Background>
        <hr />
      </ContentWrapper>
    </StyledProfilePage>
  );
};