import React from "react";
import { StyledBox, StyledBotao } from "../../Components/UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <StyledBox>
      {extratoLista.updates.map(({ id, type, value, date, from }) => {
        return (
          <Items key={id} type={type} value={value} date={date} from={from} />
        );
      })}
      <StyledBotao>Ver Mais</StyledBotao>
    </StyledBox>
  );
};

export default Extrato;
