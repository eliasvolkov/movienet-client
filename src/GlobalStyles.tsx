import { createGlobalStyle } from 'styled-components';
import { mq } from 'utils/ui';
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
  
  html{
    ${mq({
        fontSize: [
            '22.5%',
            '42.5%',
            '40.5%',
            '42.5%',
            '42.5%',
            '62.5%',
            '62.5%',
            '62.5%',
        ],
    })}
  }
  body {
      background-color: #2a2929;
      font-family: 'Proxima Nova Rg';
      font-weight: normal;
      color: #fff;
  }
`;
