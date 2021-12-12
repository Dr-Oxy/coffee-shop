import { ProductProvider } from './context/productContext';
import { CartProvider } from './context/cartContext';

import RouteContainer from './pages/RouteContainer';
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <RouteContainer />
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
