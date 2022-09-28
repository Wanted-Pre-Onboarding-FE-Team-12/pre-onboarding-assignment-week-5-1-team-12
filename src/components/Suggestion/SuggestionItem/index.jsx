import React from 'react';
import styled from 'styled-components';

const SuggestionItem = ({ sick }) => {
  const { sickCd, sickNm } = sick;
  return <Suggestion key={sickCd}>{sickNm}</Suggestion>;
};

export default SuggestionItem;

const Suggestion = styled.li`
  background-color: transparent;
  font-size: 15px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    color: #357ae1;
  }
`;
