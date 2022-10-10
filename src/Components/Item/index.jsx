import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

const ItemComponent = ({ type, value, from }) => {
  return (
    <StyledItem>
      <span className="text">{type}</span>
      <span>{value}</span>
      <span>{from}</span>
    </StyledItem>
  );
};

export default ItemComponent;
