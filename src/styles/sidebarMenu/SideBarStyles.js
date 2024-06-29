import styled from "styled-components";

export const SidebarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  width: ${(props) => (props.isOpen ? "280px" : "80px")};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  transition: width 0.3s;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const SidebarItemContainer = styled.div`
  padding: 5px 20px;
  margin: 18px 0;
`;

