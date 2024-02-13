import "../styles/spinner.css";
import styled from "styled-components";

const SpinnerTool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;
export const Spinner = () => {
  return (
    <SpinnerTool>
      <div className="spinner"></div>
    </SpinnerTool>
  );
};
