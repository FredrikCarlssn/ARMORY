import { styled } from "styled-components";

import horisontalLine from "../img/Line-fade-300.png";
import CardBackground from "../img/big-text-box.png";

import { ipfsLink } from "../CONST";
import { NavLink } from "react-router-dom";

const StyledImg = styled.img`
  width: 160px;
  transform: scaleY(5);
  filter: brightness(1.7) contrast(1.5);
  transition: 0.5s ease;
`;
const StyledP = styled.p`
  all: unset;
  font-size: 13px;
  font-weight: 900;
  color: #fff;
`;

const StyledDiv = styled.div`
  height: 251px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${CardBackground});
  background-size: contain;
  padding: 20px;
  border-radius: 3px;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.02);
    color: #e7e8e8;
    cursor: pointer;
    filter: brightness(1.05) contrast(1.1);
    & > img {
      transform: scale(1.05);
      filter: brightness(1.1);
    }
  }
`;

const StyledIPFS = styled.img`
  all: unset;
  height: 150px;
  width: 150px;
  position: relative;
  bottom: 0px;
  left: 0px;
  transition: 0.5s ease;
`;

export const DisplayToken = ({ name, linkTo, img, tokenID }) => {
  return (
    <NavLink to={`/${linkTo}`}>
      <StyledDiv>
        <StyledIPFS src={img} />
        <StyledImg src={horisontalLine} alt={name} style={{ marginTop: 10 }} />
        <StyledP>{name}</StyledP>
        <StyledImg src={horisontalLine} alt={name} />
        {tokenID ? <StyledP>ID: {tokenID}</StyledP> : null}
      </StyledDiv>
    </NavLink>
  );
};
