import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { makeBold } from '@utils/makeBold';

// CSS
import * as S from './style';

const SearchList = ({ results, keyword, focusedIndex }) => {
  const { isFetching } = useSelector(state => state.search);
  const resultContainer = useRef(null);

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: 'end',
    });
  }, [focusedIndex]);

  return (
    <S.SearchListWrapper>
      {results.length === 0 && <S.SearchItem>검색어 없음.</S.SearchItem>}
      {results?.map((data, idx) => (
        <S.SearchItem
          key={idx}
          ref={idx === focusedIndex ? resultContainer : null}
          style={{
            backgroundColor: idx === focusedIndex ? 'rgba(0,0,0,0.1)' : '',
          }}
          dangerouslySetInnerHTML={{ __html: makeBold(data.sickNm, keyword) }}
        />
      ))}
      {isFetching && <p>Loading...</p>}
    </S.SearchListWrapper>
  );
};

export default SearchList;
