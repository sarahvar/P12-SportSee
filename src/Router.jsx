import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from '../src/pages/Error/Error.jsx';
import App from './App.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
