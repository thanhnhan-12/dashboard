import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import './styles/index.scss';

function App() {
  return useRoutes(routes());
}

export default App;
