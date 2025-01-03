import { createGlobalStyle } from "styled-components";

import { Raleway, Montserrat } from "next/font/google";

const montserrat = Montserrat({ display: "swap", subsets: ["latin"] });
const raleway = Raleway({ display: "swap", subsets: ["latin"] });

const GlobalStyles = createGlobalStyle`
    body {
    font-family: ${raleway.style.fontFamily};
    font-weight : 200;
    overflow-x: hidden !important;
    overflow : ${(props) => (props.openedPage ? "hidden" : "auto")};
    cursor : none;
    & a{
        cursor : none;  
    }
    }
    h1{
        font-family: ${montserrat.style.fontFamily};  
    }
     h2, h3, h4, h5, h6{
        font-family: ${raleway.style.fontFamily};    
        font-weight : 800;
        letter-spacing: 2px
    }
    button {
        padding : 10px;
        color : ${(props) => props.theme.background};
        background-color : ${(props) => props.theme.main};
        border : solid 1px ${(props) => props.theme.main};
        border-radius : 4px;
        cursor : pointer;
    }
    input, textarea, select{
        color : ${(props) => props.theme.main};
        background-color : inherit;
        border : solid 1px ${(props) => props.theme.main};
        border-radius : 7px;
        padding : 12px;
    }
    & select{
        padding : 3px
    }
    @media(max-width : 680px){}
 `;

export default GlobalStyles;
