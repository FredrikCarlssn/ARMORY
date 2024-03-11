import {
  useOwnedNFTs,
  useContract,
  contract,
  useContractRead,
} from "@thirdweb-dev/react";
import { ITEMS_CONTRACT } from "../CONST";
import { useNavigate } from "react-router-dom";
import { DisplayToken } from "./DisplayToken";
import { useState, useEffect } from "react";

import { NILS_ADDRESS, MAGNUS_ADDRESS } from "../CONST";

export const LatestMintedTokens = () => {
  const navigate = useNavigate();
  ////// FETCHING LATEST MINTED TOKENS
  // const { contract } = useContract(ITEMS_CONTRACT);
  // const {
  //   data: totalSupply,
  //   isLoading: isLoadingTotalSupply,
  //   error: errorTotalSupply,
  // } = useContractRead(ITEMS_CONTRACT, "totalSupply");

  // useEffect(() => {
  //   if (!isLoadingTotalSupply && !errorTotalSupply) {
  //     let startCount = totalSupply - 5;
  //     let promises = [];
  //     for (let i = startCount; i <= totalSupply; i++) {
  //       promises.push(useContractRead(ITEMS_CONTRACT, "tokenByIndex", i));
  //     }
  //     Promise.all(promises)
  //       .then((data) => setTokenData(data))
  //       .catch((error) => console.error(error));
  //   }
  // }, [totalSupply, isLoadingTotalSupply, errorTotalSupply]);

  // const {
  //   data: dataNils,
  //   isLoading,
  //   error,
  // } = useOwnedNFTs(contract, NILS_ADDRESS);

  // const {
  //   data: dataMagnus,
  //   isLoading: isLoadingMagnus,
  //   error: errorMagnus,
  // } = useOwnedNFTs(contract, MAGNUS_ADDRESS);

  const [filteredData, setFilteredData] = useState([]);

  // useEffect(() => {
  //   if (!dataNils && !dataMagnus) return;
  //   let currentData = [];
  //   if (dataNils && dataMagnus) currentData = dataNils.concat(dataMagnus);
  //   else if (dataNils) currentData = dataNils;
  //   else if (dataMagnus) currentData = dataMagnus;
  //   currentData.sort(
  //     (a, b) => a.metadata.originallyMinted - b.metadata.originallyMinted
  //   );
  //   let length = currentData.length;
  //   if (length > 4) {
  //     currentData = currentData.slice(length - 5, length);
  //   }
  //   setFilteredData(currentData);
  //   console.log(currentData);
  // }, [dataNils, dataMagnus]);

  return (
    <div className="flex justify-center items-center flex-col">
      {/* <h1 className="text-4xl">Latest Minted Tokens</h1>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex gap-4">
            {filteredData.map((item, i) => {
              return (
                <DisplayToken
                  name={item.metadata.name}
                  key={i}
                  linkTo={`token/${item.metadata.id}`}
                  img={item.metadata.image}
                  tokenID={item.metadata.id}
                />
              );
            })}
          </div>
        )}
      </div>
      <button
        className="mt-4 cursor-pointer crg-button"
        onClick={() => {
          navigate("/crafted");
        }}
      >
        See All Items
      </button> */}
    </div>
  );
};
