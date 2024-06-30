import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";


export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  padding: 10px 40px 10px 40px;
  border: none;
  border-radius: 12px;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ccc"><path d="M21.71 20.29l-5.85-5.85A7.95 7.95 0 0 0 18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8a7.95 7.95 0 0 0 4.44-1.34l5.85 5.85a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>');
  background-repeat: no-repeat;
  background-size: 20px; 
  background-position: 15px center; 

  &:focus {
    outline: none; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  pointer-events: none; 
`;