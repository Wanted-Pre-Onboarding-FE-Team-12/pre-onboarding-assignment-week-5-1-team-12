import React from 'react';
import styled from 'styled-components';
import SuggestionItem from '../SuggestionItem';

const SuggestionList = ({ sicks, targetQuery }) => {
  return (
    <List>
      <span style={{ fontSize: '5px', color: 'grey' }}>추천 검색어</span>
      {sicks &&
        sicks.length > 0 &&
        sicks.map(sick => <SuggestionItem key={sick.sickCd} sick={sick} targetQuery={targetQuery}/>)}
    </List>
  );
};

export default SuggestionList;

const List = styled.ul`
  width: 400px;
  height: 300px;
  list-style: none;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  overflow-y: scroll;
`;
