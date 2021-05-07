import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --white: ${props => props.theme.colors.primary};

      --gray-50: ${props => props.theme.colors.gray1};
      --gray-100: ${props => props.theme.colors.gray2};
      --gray-200: ${props => props.theme.colors.gray3};
      --gray-500: ${props => props.theme.colors.gray4};
      --gray-800: ${props => props.theme.colors.gray5};

      --green-500: #04D361;
      
      --purple-300: #9F75FF;
      --purple-400: #9164FA; 
      --purple-500: #8257E5;
      --purple-800: #6F48C9;
    }
    
    
`;