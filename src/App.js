import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main'
import { CartFunction } from './components/Context/CartContext';
import { AuthProvider } from './components/Context/AuthContext'
import { Modal } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// App contains BrowserRouter, CartFunction(useCartContext) and Main component
function App() {
  return (
    <BrowserRouter>
      <CartFunction>
        <AuthProvider>
          <Modal />
          <NavBar />
          <Main />
          <Footer />
        </AuthProvider>
      </CartFunction>
    </BrowserRouter>
  );
}

export default App;