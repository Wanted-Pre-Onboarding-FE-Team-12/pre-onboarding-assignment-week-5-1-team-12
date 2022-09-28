import './App.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchInput from './components/SearchInput';
import SuggestionList from './components/Suggestion/SuggestionList';
import getSicks from './api/sickApi';

function App() {
  const noInputString = { sickCd: 'a', sickNm: '검색어 없음' };
  const [fetchedSick, setFetchedSick] = useState([]);
  const [searchedSick, setSearchedSick] = useState([noInputString]);
  const [targetQuery, setTargetQuery] = useState('');

  const sicks = async () => {
    const result = await getSicks();
    setFetchedSick(result);
  };
  useEffect(() => {
    sicks();
  }, []);

  const handleChange = event => {
    event.preventDefault();
    setTargetQuery(event.target.value);
    if (targetQuery.trim().length === 0) {
      setSearchedSick([noInputString]);
      return;
    }
    const searchedResult = fetchedSick.filter(sick => sick.sickNm.includes(targetQuery));
    setSearchedSick(searchedResult);
  };
  return (
    <AppContainer>
      <h1 style={{ textAlign: 'center' }}>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h1>
      <SearchInput handleChange={handleChange} />
      <SuggestionList sicks={searchedSick} targetQuery={targetQuery}/>
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
