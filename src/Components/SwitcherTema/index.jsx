import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { StyledIcone } from "../UI";

const claro = <StyledIcone src={ThemeOn} alt="Tema Claro"/>;
const escuro = <StyledIcone src={ThemeOff} alt="Tema Escuro"/>;


const Themes = (tema) => {
  if(tema){
    return escuro;
  }else {
    return claro;
  }
}

export default Themes;