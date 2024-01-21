import {HeaderContainer, HeaderContent, NewTransactionButton} from "./styles.ts";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from "../../assets/vite.svg";
import { NewTransactionModal } from "../NewTransactionModal/index.tsx";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt=""/>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}