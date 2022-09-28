import React from 'react';
import styled from 'styled-components';

const SuggestionItem = ({ sick, targetQuery }) => {
  const { sickCd, sickNm } = sick;
  const boldStartIndex = sickNm.indexOf(targetQuery);
  const boldEndIndex = boldStartIndex+targetQuery.length;
  const boldQuery = sickNm.slice(boldStartIndex, boldEndIndex);

  return <Suggestion key={sickCd}>
      {sickNm.slice(0,boldStartIndex)}
      <b>{boldQuery}</b>
      {sickNm.slice(boldEndIndex)}
  </Suggestion>;
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
