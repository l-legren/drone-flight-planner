import React from 'react'
import { MainPage } from './pages/MainPage'
import { GlobalStyle } from './theme/GlobalStyle'

function App (): React.ReactElement {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
    </div>
  )
}

export default App
