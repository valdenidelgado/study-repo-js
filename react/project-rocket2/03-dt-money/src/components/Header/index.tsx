import {HeaderContainer, HeaderContent, NewTransactionButton} from "./styles.ts";
import logoImg from "../../assets/vite.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt=""/>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}