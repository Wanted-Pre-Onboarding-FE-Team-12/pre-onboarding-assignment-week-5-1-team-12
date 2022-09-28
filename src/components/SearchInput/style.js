import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 3rem auto 0;
  height: 6rem;
  padding: 1rem;
  min-width: 50rem;
  background: #fff;
  border-radius: 42px;

  .search-input {
    padding: 0 1rem;
    width: 90%;
    height: 4rem;
    font-size: 1.8rem;
    border: none;
    font-size: 1.9rem;
  }
  .search-bnt {
    background: ${props => props.theme.colors.primary2};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;
