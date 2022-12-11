import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Router from './routes';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
