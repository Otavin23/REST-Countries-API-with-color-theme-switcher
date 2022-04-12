import React from "react";
import * as S from "./style";

const Search = () => {
  return (
    <>
      <S.Container>
        <S.Search>
          <input type="text" placeholder="Search for a country..." />
        </S.Search>
        <S.FilterRegion>
          <p>Filter by Region</p>
          <nav>
            <ul>
              <li>africa</li>
              <li>america</li>
              <li>asia</li>
              <li>europe</li>
              <li>oceania</li>
            </ul>
          </nav>
        </S.FilterRegion>
      </S.Container>
    </>
  );
};
export default Search;
