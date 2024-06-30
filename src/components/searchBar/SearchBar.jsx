import {SearchContainer, SearchInput } from '../../styles/searchbar/SearchBarStyles';

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Buscar..." />
    </SearchContainer>
  );
};
export default SearchBar;