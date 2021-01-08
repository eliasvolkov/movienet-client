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
  a{
    text-decoration: none;
    color: inherit;
  }
  
  html{
    
    ${mq({
        fontSize: [
            '32.5%',
            '42.5%',
            '56.5%',
            '48.5%',
            '50.5%',
            '52.5%',
            '62.5%',
            '62.5%',
        ],
    })}
  }
  body {
      background-color: #2a2929;
      font-family: 'Proxima Nova Rg', sans-serif;
      font-weight: normal;
      color: #fff;
      overflow-x: hidden;
  }
`;
