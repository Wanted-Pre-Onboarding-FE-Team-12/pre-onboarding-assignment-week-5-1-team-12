import styled from 'styled-components';

export const SearchListWrapper = styled.div`
  position: absolute;
  margin: 1rem auto 0;
  padding: 0.8rem;
  width: 48rem;
  max-height: 40rem;
  left: 50%;
  background: ${props => props.theme.colors.primary5};
  border-radius: 4px;
  transform: translateX(-50%);
  overflow-y: auto;
  box-shadow: 5px 5px 5px rgba(1, 1, 1, 0.3);
`;

export const SearchItem = styled.li`
  width: 100%;
  padding: 1.2rem 1rem;
  letter-spacing: 0.1rem;
  font-size: 2rem;
`;
