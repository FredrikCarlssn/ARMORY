import { useParams, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Spinner } from "../../components/Spinner.jsx";
import { ItemCard } from "../../components/ItemCard.jsx";
import { SkillCard } from "../../components/SkillCard.jsx";
import {
  useContract,
  Web3Button,
  useContractWrite,
  useNFT,
  useContractRead,
} from "@thirdweb-dev/react";
import {
  ITEMS_CONTRACT,
  SKILLS_CONTRACT,
  traitKeysItems,
  traitKeysSkills,
  ITEMS_TRAIT_VALUES,
  SKILLS_TRAIT_VALUES,
} from "../../CONST.js";
import { motion } from "framer-motion";

import conMap from "../../img/con-map.jpg";
import CardBackground from "../../img/big-text-box.png";

const StyledClaimTokenPage = styled.div`
  background-image: url(${conMap});
  background-size: cover;
  background-attachment: fixed;
  column-gap: 40px;
  min-height: 100vh;
  padding-left: 80px;
  padding-right: 80px;
`;

const SmallCard = styled.div`
  background-image: url(${CardBackground});
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 870px) {
    transform: scale(0.7);
    margin-top: -150px;
  }
`;

const CardContent = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 870px) {
    transform: scale(1.4);
  }
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
  @media screen and (max-width: 870px) {
    margin-top: -400px;
  }
`;

export const DisplayOwnedToken = () => {
  const contractParam = useParams().contract;
  const tokenId = useParams().tokenId;
  const navigate = useNavigate();
  let dynamicTraits = [];

  const { contract } = useContract(
    `${contractParam == 0 ? ITEMS_CONTRACT : SKILLS_CONTRACT}`
  );
  const { mutateAsync: burn } = useContractWrite(contract, "burn");
  const { data: nft, isLoading } = useNFT(contract, tokenId);
  const { data: dynamicTraitBytes, isLoading: isLoading2 } = useContractRead(
    contract,
    "getTraitValues",
    [tokenId, traitKeysItems]
  );

  if (!isLoading2) {
    let traitTypes = {};
    if (contractParam == 0) {
      traitTypes = ITEMS_TRAIT_VALUES;
    }
    if (contractParam == 1) {
      traitTypes = SKILLS_TRAIT_VALUES;
    }
    dynamicTraitBytes.forEach((trait, i) => {
      if (
        trait ===
        "0x0000000000000000000000000000000000000000000000000000000000000000"
      )
        return;
      let convertedTrait = {};
      convertedTrait.trait_type = traitTypes[i];
      convertedTrait.value = Buffer.from(trait.slice(2), "hex").toString(
        "utf-8"
      );
      dynamicTraits.push(convertedTrait);
    });
  }

  if (isLoading || isLoading2)
    return (
      <StyledClaimTokenPage>
        <Spinner />
      </StyledClaimTokenPage>
    );

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
            {contractParam == 0 ? (
              <ItemCard token={nft} dynamicTraits={dynamicTraits} />
            ) : (
              <SkillCard token={nft} dynamicTraits={dynamicTraits} />
            )}
          </BigCard>
        </ContentWrapper>
      </motion.div>
    </StyledClaimTokenPage>
  );
};

{
  /* <SmallCard>
          <CardContent>
            <Web3Button
              contractAddress={SOULBOUND_CONTRACT}
              action={() =>
                burn({ args: [tokenID] })
                  .then(() => alert("Token burned!"))
                  .then(() => navigate("/profile"))
              }
              onError={(error) => alert("Something went wrong!")}
              className="crg-button"
            >
              Burn Token
            </Web3Button>
          </CardContent>
        </SmallCard> */
}
