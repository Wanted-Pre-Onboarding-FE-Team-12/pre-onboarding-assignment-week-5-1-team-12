# pre-onboarding-assignment-week-5-1-team-12

## 프로젝트 목표

- 검색 창 구현
- 추천 검색어 기능 구현

<br/>
<br/>

## 팀원

| [<img src="https://avatars.githubusercontent.com/u/59363543?s=96&v=4" width="120px" /> ](https://github.com/jinux127) | [<img src="https://avatars.githubusercontent.com/u/73879034?s=64&v=4" width="120px" /> ](https://github.com/rmawogns) | [<img src="https://avatars.githubusercontent.com/u/54847910?s=64&v=4" width="120px" /> ](https://github.com/ch4md0m) | [<img src="https://avatars.githubusercontent.com/u/62678492?s=64&v=4" width="120px" /> ](https://github.com/jiye-7) | [<img src="https://avatars.githubusercontent.com/u/45444757?s=64&v=4" width="120px" /> ](https://github.com/EEOOOO) | [<img src="https://avatars.githubusercontent.com/u/97820540?s=64&v=4" width="120px" /> ](https://github.com/ghbaekdev) |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **[팀장]정진우**                                                                                                      | **김재훈**                                                                                                            | **노기훈**                                                                                                           | **유지예**                                                                                                          | **이우윤**                                                                                                          | **백광현**                                                                                                             |

<br/>
<br/>

## 🚀 실행

#### 실행 방법

```sh
npm install

npm run start
```

<br/>

#### 데모 링크

[데모링크 바로가기](https://wanted-team12-search.netlify.app/)

<br/>
<br/>

## 📖 과제 달성 사항 및 해결 방법

#### api 호출시 debounce 이용.

- delay 시간 이내에 함수가 반복 호출될 경우, `clearTimeout` 이 되므로 반복 호출되지 않음.
- 함수의 반복 호출이 멈춘 경우(키 입력이 delay 시간 동안 없는 경우), delay 시간 후에 callback 함수 실행.

<br/>

#### api 호출 캐싱 구현

- `cacheStorage` 를 이용하여 구현.
- `cacheStorage` 에 저장되어 있는 값을 호출하면 api를 호출하지 않고 `cacheStorage` 값을 return
- 저장되어 있지 않은 값이라면 api를 호출하고 `cacheStorage` 에 저장.
- 호출시 Header에서 `Date` 값을 가져와 1분이 지났다면 다시 api 요청.

```jsx

sync get() {
    await this.initialize();
    const cachedResponse = await this.cacheStorage.match(this.url);

    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    const date = new Date(cachedResponse.headers.get('Date'));
    if (Date.now() > date.getTime() + 1000 * 60) {
      return false;
    }

    return await cachedResponse.json();
  }
```

<br/>

#### 키보드 방향키로 검색어 이동

- 키보드 입력에 따라 state를 변경하면서 `focusedIndex` 값을 하위 컴포넌트로 전달.
- 하위 컴포넌트의 index 값과 비교하여 style을 적용.

```jsx
const handleKeyDown = event => {
  let nextIndexCount = 0;

  if (event.key === 'ArrowDown') nextIndexCount = (focusedIndex + 1) % results.length;
  if (event.key === 'ArrowUp')
    nextIndexCount = (focusedIndex + results.length - 1) % results.length;

  setFocusedIndex(nextIndexCount);
};
```

```jsx

...

<S.SearchListWrapper>
    {results.length === 0 && <S.SearchItem>검색어 없음.</S.SearchItem>}
    {results?.map((data, idx) => (
        <S.SearchItem
          key={idx}
          ref={idx === focusedIndex ? resultContainer : null}
          style={{
            backgroundColor: idx === focusedIndex ? 'rgba(0,0,0,0.1)' : '',
          }}
        />
    ))}
</S.SearchListWrapper>

...

```

<br/>

#### 사용자 입력 텍스트 Bold 처리

- 정규 표현식을 사용하여 사용자 입력 단어를 `replace`.
- react에서 `innerHTML` 대체 방법인 `dangerouslySetInnerHTML` 을 사용하여 \_\_html 키로 객체를 전달.

```jsx
export const makeBold = (value, keyword) => {
  let re = new RegExp(keyword, 'g');

  return value.replace(re, '<strong>' + keyword + '</strong>');
};
```

```jsx

...

<S.SearchItem
  key={idx}
  ref={idx === focusedIndex ? resultContainer : null}
  style={{
    backgroundColor: idx === focusedIndex ? 'rgba(0,0,0,0.1)' : '',
  }}
  dangerouslySetInnerHTML={{ __html: makeBold(data.sickNm, keyword) }}
/>

...

```

<br/>
<br/>

## 🛠 Tech Stack

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</div>

<br/>
<br/>

## 📁 폴더구조

```
src
 ┣ api
 ┃ ┣ index.js
 ┃ ┗ searchApi.js
 ┣ components
 ┃ ┣ SearchContainer
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ style.js
 ┃ ┣ SearchInput
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ style.js
 ┃ ┗ SearchList
 ┃ ┃ ┣ Index.jsx
 ┃ ┃ ┗ style.js
 ┣ hooks
 ┣ store
 ┃ ┣ searchSlice.js
 ┃ ┗ store.js
 ┣ styles
 ┃ ┣ globalStyle.js
 ┃ ┗ theme.js
 ┣ utils
 ┃ ┣ cacheStorage.js
 ┃ ┗ makeBold.js
 ┣ App.js
 ┗ index.js
```
