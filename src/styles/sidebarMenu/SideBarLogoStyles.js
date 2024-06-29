import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 50px;
`;

export const ImgLogo = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  height: 50px;
`;

