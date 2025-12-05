import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/Resdux.jsx'
import { Provider } from 'react-redux'
// import { CounterProvider } from '../context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <CounterProvider> */}
   <Provider store={store}>
       <App/>
  </Provider>
    {/* </CounterProvider> */}
  </StrictMode>,
)
