import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";
import { BeamTestnet } from "@thirdweb-dev/chains";
import { TOKEN_CONTRACT } from "../CONST";

import "../styles/header.css";

import gamelogo from "../img/crg/con-flat.svg";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;

  @media screen and (max-width: 870px) {
    transform: scale(0.6);
  }
`;

const WalletStyle = styled.div`
  font-size: 0.5 !important;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const supportedTokens = {
  // use chain id of the network as key and pass an array of tokens to show
  // you can directly pass the number or import the chain object from @thirdweb-dev/chains to get the chain id
  [BeamTestnet.chainId]: [
    {
      address: TOKEN_CONTRACT, // token contract address
      name: "Crystals",
      symbol: "IMX",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png",
    },
  ],
};

const displayBalanceToken = {
  // you can also import the chain object from @thirdweb-dev/chains to get the chain id
  [BeamTestnet.chainId]: TOKEN_CONTRACT, // token contract address
};

export const Header = () => {
  return (
    <StyledHeader>
      <div className="menu-bar">
        <div className="menu-logo-separator">
          <div className="menu-logo">
            <img src={gamelogo} alt="Logo" />
          </div>
          <div className="menu-separator"></div>
        </div>
        <div className="menu-items-and-buttons">
          <div className="menu-items-container">
            <NavLink className="menu-item" to={"/"}>
              Home
            </NavLink>
            <NavLink className="menu-item" to={"/profile"}>
              Profile
            </NavLink>
            <NavLink className="menu-item" to={"/about"}>
              About
            </NavLink>
          </div>
          <div className="menu-buttons">
            <WalletStyle>
              <ConnectWallet
                className="web3button"
                supportedTokens={supportedTokens}
                displayBalanceToken={displayBalanceToken}
                switchToActiveChain={true}
              />
            </WalletStyle>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
