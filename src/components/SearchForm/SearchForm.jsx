import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ hadleSubmit }) => {
  const [query, setQuery] = useState("")
  const handleImput = (evt) => {
  setQuery(evt.target.value)
}
  const hendleFormSubmit = (evt) => {
    evt.preventDefault();
    hadleSubmit(query);
    setQuery("")
}
  return (
    <SearchFormStyled onSubmit={hendleFormSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" onChange={handleImput} name="region" required>
        <option  disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
