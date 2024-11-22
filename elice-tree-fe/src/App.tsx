import { Router } from 'components';
import React from 'react';
import GlobalStyle from 'styles/global/GlobalStyle';
import { FontContainer } from 'styles/global/index.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FontContainer>
        <Router />
      </FontContainer>
    </div>
  );
}

export default App;
