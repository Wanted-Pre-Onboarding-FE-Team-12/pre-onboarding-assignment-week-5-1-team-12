import styled from 'styled-components';
import SearchContainer from '@components/SearchContainer';

function App() {
  return (
    <div>
      <TopBanner>
        <h1 className="title">
          국내 모든 임상시험 검색하고
          <br /> 온라인으로 참여하기
        </h1>
        <SearchContainer />
      </TopBanner>
    </div>
  );
}

export default App;

const TopBanner = styled.div`
  position: relative;
  min-height: 46rem;
  margin-top: 7rem;
  background: ${props => props.theme.colors.primary3};
  padding: 8rem 0;

  .title {
    font-size: 3.4rem;
    font-weight: 700;
    text-align: center;
    line-height: 5rem;
  }
`;
