import { styled } from "styled-components";
import { useOwnedNFTs, useContract } from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../../CONST.js";
import { useState } from "react";
import { useParams } from "react-router";

import { DisplayToken } from "../../components/ui/DisplayToken.jsx";
import { Spinner } from "../../components/ui/Spinner.jsx";
import { SortingSidebar } from "../../components/MenuComponents/SortingSidebar.jsx";
import { Expandable } from "../../components/buttons/Expandable.jsx";
import { ConnectedWallet } from "../../components/ui/ConnectedWallet.jsx";

import softLight from "../../img/images/soft-light-fog.png";
import vault from "../../img/images/vault.png";
import epicSignInWhite from "../../img/buttons/epic-sign-in-white.png";
import conWebLogo from "../../img/images/con-web-logo.png";
import link from "../../img/ui/link.png";

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
  width: 100%;
  max-width: 1500px;
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
  row-gap: 10px;
`;

export const ProfilePage = () => {
  // ADDRESS LOGIC
  const [address, setAddress] = useState(
    useParams().address ||
      (localStorage.getItem("walletAddress") &&
        localStorage.getItem("walletAddress").replace(/"/g, ""))
  );

  const loginWithEpic = async () => {
    const url =
      "https://www.epicgames.com/id/authorize?client_id=xyza7891JqURqLDsngnChqqfNdWvDsup&response_type=code&scope=basic_profile&redirect_uri=http://localhost:3000/coderesponse";
    window.open(url, "_self");
  };

  // SIDEBAR LOGIC
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [filteredNFTs, setFilteredNFTs] = useState([]);

  // THIRDWEB
  const { contract: contractItems } = useContract(ITEMS_CONTRACT);

  const { nfts, isLoading } = useOwnedNFTs(contractItems, address);

  if (address) {
    return (
      <StyledProfilePage>
        <ContentWrapper>
          <hr />
          <Background>
            <SortingSidebar
              isSidebarOpen={isSidebarOpen}
              nfts={nfts}
              setFilteredNFTs={setFilteredNFTs}
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
                  <ConnectedWallet wallet={address} />
                </div>
                {isLoading && address != "undefined" ? (
                  <Spinner className="mt-12" />
                ) : !nfts ? (
                  <div className="flex justify-center font-bold mt-10">
                    There are no NFTs associated with your account.
                  </div>
                ) : null}
              </div>
              <StyledTokenList>
                {filteredNFTs.length != 0 ? (
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
                ) : (
                  <div>No NFTs were found matching your current filters.</div>
                )}
              </StyledTokenList>
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
          <div className="h-[80vh] flex flex-col items-center justify-center">
            {/* <div className="text-4xl font-bold -mb-12 z-10 text-epicGrey to-white">
              Sign In With EPIC Account
            </div> */}
            <div className="relative flex bg-[url('/src/img/images/hero-image.jpg')] bg-cover rounded-xl">
              <div className="w-72 h-96 flex items-center justify-center relative">
                <img
                  src={conWebLogo}
                  className="absolute -right-10 mt-6 top-1/4 w-96 object-contain z-10"
                />
              </div>
              <div className="inset-0 bg-gradient-to-r from-transparent to-white h-96 w-36 relative">
                <img src={link} className="absolute top-44 -right-4" alt="" />
              </div>
              <div className="w-96 h-96 bg-white flex items-center justify-center rounded-r-xl">
                <div
                  className="bg-epicGrey h-48 w-48 flex items-center justify-center rounded-md hover:scale-105 cursor-pointer transition duration-500 ease-in-out active:scale-75"
                  onClick={loginWithEpic}
                >
                  <img src={epicSignInWhite} className="h-36" />
                </div>
              </div>
            </div>
          </div>
        </Background>
        <hr />
      </ContentWrapper>
    </StyledProfilePage>
  );
};
