import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useContract, useNFT } from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../../CONST.js";
import { motion } from "framer-motion";

import { Spinner } from "../../components/ui/Spinner.jsx";
import { ItemCard } from "../../components/ItemCard.jsx";

import conMap from "../../img/images/con-map.jpg";
import CardBackground from "../../img/ui/big-text-box.png";

const StyledClaimTokenPage = styled.div`
  background-image: url(${conMap});
  background-size: cover;
  background-attachment: fixed;
  column-gap: 40px;
  min-height: 100vh;
  padding-left: 80px;
  padding-right: 80px;
`;

const StyledCard = styled.div`
  height: 1200px;
  width: 950px;
  background-image: url(${CardBackground});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 80px 50px;
  transform: scale(0.8);
  font-size: 1.15rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 870px) {
    transform: scale(0.5);
    flex-direction: column;
  }
`;

const BigCard = styled.div`
  margin-top: -100px;
  @media screen and (max-width: 870px) {
    margin-top: -400px;
  }
`;

export const DisplayOwnedToken = () => {
  const tokenId = useParams().tokenId;
  const { contract } = useContract(ITEMS_CONTRACT);
  const { data: nft, isLoading, error } = useNFT(contract, tokenId);

  if (isLoading)
    return (
      <StyledClaimTokenPage>
        <Spinner />
      </StyledClaimTokenPage>
    );
  if (error || !nft.metadata.properties) {
    return (
      <StyledClaimTokenPage>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <ContentWrapper>
            <BigCard>
              <StyledCard>
                <h1 className="flex w-full h-full justify-center items-center font-bold text-5xl">
                  No NFT found with tokenId: {nft.metadata.id}
                </h1>
              </StyledCard>
            </BigCard>
          </ContentWrapper>
        </motion.div>
      </StyledClaimTokenPage>
    );
  }

  return (
    <StyledClaimTokenPage>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContentWrapper>
          <BigCard>
            <ItemCard token={nft} />
          </BigCard>
        </ContentWrapper>
      </motion.div>
    </StyledClaimTokenPage>
  );
};