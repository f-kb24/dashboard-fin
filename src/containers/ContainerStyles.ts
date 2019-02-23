import styled, { createGlobalStyle } from "styled-components";

/*
    GLOBAL STYLES
*/

export const Global = createGlobalStyle`

    @font-face {
        font-family: Chivo;
        src: url('./assets/fonts/Chivo/Chivo-Regular.ttf');
    }
    body{
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: Chivo;
        -webkit-font-smoothing: antialiased;
    }

    .navigationButton-active{
        background-color: #284557;
        color: #ffb366;
    }
    .navigationButton-non{
        color: #dce8ef;
    }
    

`;

/*
    PARENT GRID
*/

export const Grid = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 4.3rem auto;
`;

/*
    UNIVERSAL DASHBOARD PLACEMENT
*/

export const DashboardPlacement = styled.div`
    grid-column-start: 2;
    background-color: #eef3f7;
    height: 100%;
`;

/*
    SHIPMENT CONTAINER STYLES
*/

export const ShipmentGrid = styled.div``;
