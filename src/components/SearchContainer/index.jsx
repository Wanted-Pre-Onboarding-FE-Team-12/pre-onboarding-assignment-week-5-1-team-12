import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SearchInput from '@components/SearchInput';
import SearchList from '@components/SearchList/Index';

// CSS
import * as S from './style';

const SearchContainer = () => {
  const { showList, searchData: results } = useSelector(state => state.search);
  const [showResults, setShowResults] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [keyword, setKeyword] = useState('');

  const setKeywordHandler = value => {
    setKeyword(value);
  };

  const handleKeyDown = event => {
    let nextIndexCount = 0;

    if (event.key === 'ArrowDown') nextIndexCount = (focusedIndex + 1) % results.length;
    if (event.key === 'ArrowUp')
      nextIndexCount = (focusedIndex + results.length - 1) % results.length;

    setFocusedIndex(nextIndexCount);
  };

  useEffect(() => {
    if (results.length >= 0 && showList) setShowResults(true);
  }, [results]);

  return (
    <S.SearchWrapper>
      <div className="relative" tabIndex={1} onKeyDown={handleKeyDown}>
        <SearchInput setShowResults={setShowResults} setKeyword={setKeywordHandler} />
        {showResults && (
          <SearchList keyword={keyword} results={results} focusedIndex={focusedIndex} />
        )}
      </div>
    </S.SearchWrapper>
  );
};

export default SearchContainer;
