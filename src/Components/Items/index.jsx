import React from "react";
import styled from "styled-components";
import ItemComponent from "../Item";
import ImageFilter from "../../ImageFilter";

const StyledItems = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  font-size: 12px;
`;

const ItemsComponent = (props) => {
  return (
    <StyledItems>
      {ImageFilter(props.type)}
      <ItemComponent {...props} />
      <span>{props.date}</span>
    </StyledItems>
  );
};

export default ItemsComponent;
