import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HOME_PATH } from './constants/paths'
import Homepage from './pages/Homepage'
import { AppContentWrapper } from './App.styled'
import Header from './shared/components/header/Header'
import Footer from './shared/components/footer/Footer'
import { Provider } from 'react-redux'
import store, { persistor } from './shared/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import Toast, { ToastType } from './shared/components/toast/Toast'
import { useToast } from './shared/hooks/useToast'
import { createContext } from 'react'

type ToastFunctions = {
  show: (type: ToastType, message: string, delaySeconds?: number) => void
  hide: () => void
}
export const ToastContext = createContext<ToastFunctions>(null)

const App = () => {
  const { toastProps, hideToast, showToast } = useToast()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Toast {...toastProps} />
          <ToastContext.Provider value={{ show: showToast, hide: hideToast }}>
            <AppContentWrapper>
              <Header />
              <Routes>
                <Route path={HOME_PATH} element={<Homepage />} />
                <Route path="/" element={<Navigate to={HOME_PATH} />} />
              </Routes>
              <Footer />
            </AppContentWrapper>
          </ToastContext.Provider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
