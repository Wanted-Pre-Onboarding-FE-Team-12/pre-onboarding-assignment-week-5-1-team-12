import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { fetchList } from '@store/searchSlice';

// CSS
import * as S from './style';

const SearchInput = ({ setShowResults, setKeyword }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const timeout = useRef();

  const searchHandler = () => {
    clearTimeout(timeout.current);

    if (!inputRef.current.value.trim()) return setShowResults(false);

    timeout.current = setTimeout(() => {
      dispatch(fetchList(inputRef.current.value));
      setKeyword(inputRef.current.value);
    }, 250);
  };

  return (
    <S.SearchInputWrapper>
      <input type="text" className="search-input" ref={inputRef} onChange={searchHandler} />
      <div className="search-bnt"></div>
    </S.SearchInputWrapper>
  );
};

export default SearchInput;
