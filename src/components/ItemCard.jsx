import { styled, keyframes } from "styled-components";

import Tokens from "../Tokens/TokenData.json";

import CardBackground from "../img/big-text-box.png";
import horisontalLine from "../img/Line-fade-300.png";
import downArrowLine from "../img/downArrowLine.png";
import upArrowLine from "../img/upArrowLine.png";
import { ipfsLink, traitTypes } from "../CONST";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";
import { ITEMS_CONTRACT } from "../CONST";

const customAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
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

const StyledImageDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  height: 400px;
  transition: 0.3s ease;
  &:hover {
    filter: brightness(1.1) contrast(1.1);
  }
`;

const StyledMetadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: center;
  margin: 10px 0;
`;

const TraitBox = styled.div`
  height: 45px;
  margin: 10px 10px;
  background-color: #e6e6e6;
  padding: 0.5rem;
  border-radius: 10px;
  border: 3px solid #694e43;
  color: black;
  background: #e6e6e6;
  background: repeating-radial-gradient(
    ellipse farthest-corner at center center,
    #e6e6e6 0%,
    #694e43 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    animation: ${customAnimation} 1s ease-in-out;
  }
`;
const Vitals = styled.div`
  font-size: 1.2rem;
  height: 30px;
  margin: 3px;
  background-color: #e6e6e6;
  padding: 0;
  border-bottom: 2px solid #77716e;
  padding-left: 20px;
  color: black;
  background: #e6e6e6;
  background: repeating-radial-gradient(
    ellipse farthest-corner at center center,
    #e6e6e6 0%,
    #694e43 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ItemCard = ({ token }) => {
  console.log(token);
  const newArray = (oldArray, ...indices) => {
    return indices.map((index) => oldArray[index]);
  };
  const navigate = useNavigate();

  const semanticKeyes = [
    "Aethereal Mods", //0
    "Attack Speed", //1
    "Attribute Requirements", //2
    "Base Item", //3
    "Category", //4
    "Class Requirement", //5
    "Damage Max", //6
    "Damage Min", //7
    "Damage Type", //8
    "Defense", //9
    "Family", //10
    "Implicit Mods", //11
    "Item Class", //12
    "Item Looted", //13
    "Item Sub Class", //14
    "Level", //15
    "Level Requirement", //16
    "Max Charges", //17
    "Max Durability", //18
    "Mods", //19
    "Originally Minted", //20
    "Quality", //21
    "Range", //22
    "Rarity", //23
    "Season", //24
    "Sub Category", //25
    "Theme", //26
  ];

  const semanticToken = Object.entries(token.metadata.properties)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((trait, i) => {
      let newTrait = {};
      newTrait.trait_type = `${semanticKeyes[i]}`;
      newTrait.value = `${trait[1]}`;
      return newTrait;
    });

  let vitals = [
    {
      trait_type: "Damage Range",
      value: `${semanticToken[7].value} - ${semanticToken[6].value}`,
    },
  ].concat(newArray(semanticToken, 21, 22, 8, 1, 23, 18));

  const traits = newArray(
    semanticToken,
    3,
    4,
    9,
    10,
    12,
    14,
    15,
    16,
    22,
    24,
    25,
    26
  );

  const mods = semanticToken[19].value.split(",");

  const implicitMods = semanticToken[11].value.split(",");

  const atherialMods = semanticToken[0].value.split(",");

  const allMods = implicitMods
    .concat(atherialMods)
    .map((mod) => {
      return `\u2666 ${mod}`;
    })
    .concat(mods);
  const requirements = semanticToken
    .filter((trait) => trait.trait_type.includes("Requirement"))
    .map((trait) => {
      if (trait.trait_type.includes("Class")) {
        return { ...trait, value: `Class-${trait.value}, ` };
      }
      if (trait.trait_type.includes("Level")) {
        return { ...trait, value: `Level-${trait.value}` };
      }
      if (trait.trait_type.includes("Attribute")) {
        let attribute = trait.value.split(",");
        return {
          ...trait,
          value: `Toughness-${attribute[0]}, Trickery-${attribute[1]}, Caliber-${attribute[2]}, Brilliance-${attribute[3]}, `,
        };
      }
      return trait;
    });

  return (
    <StyledCard>
      <StyledImageDiv>
        <div className="relative flex flex-col justify-between w-[450px]">
          <div>
            <h1 className="text-5xl mt-4 break-words w-96">
              {token.metadata.name}
            </h1>
            <img src={horisontalLine} className="w-full h-1 my-2" />
            <p className="text-2xl mr-2">{token.metadata.description}</p>
            <h3 className="mt-2">
              <b>Requirements: </b>
              {requirements.map((trait, i) => {
                return <span key={i}>{trait.value}</span>;
              })}
            </h3>
          </div>
          <div>
            <p className="mt-5">Aethereal Mods:</p>
            {implicitMods.map((trait, i) => {
              return (
                <TraitBox className="bottom-0 w-5/6" key={i}>
                  &#9830; {trait}
                </TraitBox>
              );
            })}
          </div>
        </div>
        <StyledImage src={token.metadata.image} />
        <div
          className="bg-[url('/src/img/sphere.png')] bg-cover h-16 w-40 absolute top-[408px] right-14 cursor-pointer border-2 hover:border-4 transition-all rounded-md bg-center"
          onClick={() =>
            window.open(
              `https://testnet.sphere.market/beam-testnet/nft/${ITEMS_CONTRACT}/${token.metadata.id}`
            )
          }
        ></div>
      </StyledImageDiv>
      <img src={upArrowLine} className="w-full h-10 my-2" />
      <div className="bg-[url('/src/img/vitalsBg.png')] bg-cover h-62 pt-4">
        {vitals.map((trait, i) => {
          return (
            <Vitals key={i}>
              {trait.trait_type}: {trait.value}
            </Vitals>
          );
        })}
      </div>
      {/* <img src={horisontalLine} className="w-full h-1 my-2" /> */}
      <StyledMetadata>
        {traits.map((trait, i) => {
          return (
            <TraitBox key={i}>
              {trait.trait_type}: {trait.value}
            </TraitBox>
          );
        })}
      </StyledMetadata>
      <img src={downArrowLine} className="w-full h-10" />
      {mods.length > 0 ? (
        <Modal list={allMods} buttonText={`Show All Mods: ${allMods.length}`} />
      ) : null}
    </StyledCard>
  );
};
