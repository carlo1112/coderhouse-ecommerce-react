// App contiene un componente Main
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main'
import { CartFunction } from './components/Context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartFunction>
        <Main />
      </CartFunction>
    </BrowserRouter>
  );
}

export default App;