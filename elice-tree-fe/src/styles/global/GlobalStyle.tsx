import { createGlobalStyle } from 'styled-components';
import * as fontStyle from 'pretendard/dist/web/static/pretendard-dynamic-subset.css';

const GlobalStyle = createGlobalStyle`
  ${fontStyle}
`;

export default GlobalStyle;
