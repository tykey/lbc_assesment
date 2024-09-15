import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HOME_PATH } from './constants/paths'
import Homepage from './pages/Homepage'
import { AppContentWrapper } from './App.styled'
import Header from './shared/components/header/Header'
import Footer from './shared/components/footer/Footer'
import { Provider } from 'react-redux'
import store, { persistor } from './shared/store/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppContentWrapper>
            <Header />
            <Routes>
              <Route path={HOME_PATH} element={<Homepage />} />
              <Route path="/" element={<Navigate to={HOME_PATH} />} />
            </Routes>
            <Footer />
          </AppContentWrapper>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
