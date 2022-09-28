import './App.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchInput from './components/SearchInput';
import SuggestionList from './components/Suggestion/SuggestionList';
import getSicks from './api/sickApi';

function App() {
  const [fetchedSick, setFetchedSick] = useState([]);
  const [searchedSick, setSearchedSick] = useState([]);
  const sicks = async () => {
    const result = await getSicks('');
    setFetchedSick(result);
  };
  useEffect(() => {
    sicks();
    console.log(searchedSick);
  }, [searchedSick]);

  const handleChange = event => {
    event.preventDefault();
    const target = event.target.value;
    if (target.trim().length === 0) {
      setSearchedSick([]);
      return;
    }
    const searchedResult = fetchedSick.filter(sick => sick.sickNm.includes(target));
    setSearchedSick(searchedResult);
  };
  return (
    <AppContainer>
      <h1 style={{ textAlign: 'center' }}>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h1>
      <SearchInput handleChange={handleChange} />
      {searchedSick.length > 0 && <SuggestionList sicks={searchedSick} />}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d0e8fd;
`;
