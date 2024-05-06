import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <ConfigProvider>
      <App />
    </ConfigProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>,
);
