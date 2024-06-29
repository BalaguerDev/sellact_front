
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0; /* Asegura que no haya margen en el body */
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Layout = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isOpen ? "280px 1fr" : "80px 1fr"};
  height: 100vh;
`;

export const DashboardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  background: #f4f6ff;
  transition: margin-left 0.3s;
  margin-left: ${(props) => (props.isOpen ? "300px" : "80px")};
  width: calc(100% - ${(props) => (props.isOpen ? "300px" : "80px")});
  height: 100vh;
  box-sizing: border-box;
`;

export const PageContainer = styled.div`
  padding: 20px;
`;