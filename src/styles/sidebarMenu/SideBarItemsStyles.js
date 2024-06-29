import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarItem = styled(Link).withConfig({
  shouldForwardProp: (prop) =>
    !["isOpen", "isSelected", "isHovered"].includes(prop),
})`
  padding: 20px 10px;
  height: 40px;
  width: ${(props) => (props.isOpen ? "240px" : "40px")};
  color: ${(props) => (props.isSelected || props.isHovered ? "#FFFFFF" : "#9197B3")};
  text-decoration: none;
  display: flex;
  align-items: center;
  position: absolute;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${(props) => (props.isSelected ? "#225282" : "transparent")};
  border-radius: 7px;

  &:hover {
    background: ${(props) => (props.isSelected ? "" : "#a1b7cb")};
    color: ${(props) => (props.isSelected ? "#FFFFFF" : "#FFFFFF")};
  }

  .icon {
    margin-right: ${(props) => (props.isOpen ? "20px" : "0")};
    width: 20px;
    height: 20px;
    transition: margin-right 0.3s;
    color: ${(props) => (props.isHovered || props.isSelected ? "#FFFFFF" : "#9197B3")};
  }
`;

export const SidebarItemText = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isOpen ? "space-between" : "space-between"};
  flex: 1;
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#9197B3")};
`;
