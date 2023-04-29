import styled, {css} from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' 

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'blue',
  success: 'green',
  danger: 'red'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: 0;
  margin: 10px;


  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  /* ${props => {
    return css`
      background-color: ${buttonVariant[props.variant]}
    `
  }} */
`