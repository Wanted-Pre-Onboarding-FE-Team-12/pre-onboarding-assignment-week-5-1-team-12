import React from 'react';
import styled from 'styled-components';

export const SearchInput = ({ handleChange }) => {
  return (
    <form>
      <InputField type="text" placholder="검색어를 입력하세요" onKeyUp={handleChange}></InputField>
      <SubmitButton>검색</SubmitButton>
    </form>
  );
};

export default SearchInput;

const InputField = styled.input`
  font-size: 20px;
  padding: 16px;
  border-radius: 50px 0 0 50px;
  border: 0;
  margin: 0;
`;

const SubmitButton = styled.button`
  color: white;
  font-size: 20px;
  padding: 14px;
  border-radius: 0 50px 50px 0;
  border: 0;
  background-color: #357ae1;
`;
