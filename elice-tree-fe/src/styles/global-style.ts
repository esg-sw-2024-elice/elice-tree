import * as styled from 'styled-components';
import * as fontStyle from 'pretendard/dist/web/static/pretendard-dynamic-subset.css';

export default styled.createGlobalStyle`
  ${fontStyle}

  * {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    letter-spacing: 0;
    word-break: keep-all;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: 0.45px;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
  }

  *:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    white-space: pre-line;
  }

  a {
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;

    &:hover,
    &:active {
      opacity: 0.8;
    }

    &:focus {
      outline: none;
    }
  }
`;
