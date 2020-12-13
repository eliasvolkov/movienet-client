import { createGlobalStyle } from 'styled-components';
import { CirceFont } from './assets/fonts/circe';
import { proximaNovaFont } from './assets/fonts/proximaNova';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ${CirceFont}
  ${proximaNovaFont}
  body {
      background-color: #2a2929;
      font-family: 'Proxima Nova Rg';
      font-weight: normal;
      color: #fff;
  }
`;
