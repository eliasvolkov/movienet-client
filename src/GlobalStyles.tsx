import { injectGlobal } from '@emotion/css';
import { CirceFont } from './assets/fonts/circe';
import { proximaNovaFont } from './assets/fonts/proximaNova';

export const GlobalStyles = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    injectGlobal`
  * {
    box-sizing: border-box;
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
    return null;
};
