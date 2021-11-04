// App contiene un componente Main
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main'

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;