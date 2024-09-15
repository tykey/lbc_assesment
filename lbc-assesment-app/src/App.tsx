import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HOME_PATH } from './constants/paths'
import Homepage from './pages/Homepage'
import { AppContentWrapper } from './App.styled'
import Header from './shared/components/header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <AppContentWrapper>
        <Header />
        <Routes>
          <Route path={HOME_PATH} element={<Homepage />} />
          <Route path="/" element={<Navigate to={HOME_PATH} />} />
        </Routes>
      </AppContentWrapper>
    </BrowserRouter>
  )
}

export default App
