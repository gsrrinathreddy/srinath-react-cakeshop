import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cakes from './pages/Cakes';
import Chocolates from './pages/Chocolates';
import Icecreams from './pages/Icecreams';
import Flowers from './pages/Flowers';
import Gifts from './pages/Gifts';
import Festivals from './pages/Festivals';
import SpecialDays from './pages/SpecialDays';
import Occassions from './pages/Occassions';
import Anniversary from './pages/Annivaersary';
import Birthday from './pages/Birthday';
import Decoration from './pages/Decoration';
import Cart from './pages/Cart';
import OrderSummary from './pages/OrderSummary';
import NoMatch from './pages/NoMatch';


const pages = ['Chocolates', 'Cakes', 'Icecreams','Flowers','Decoration','Birthday','Anniversary','Occassions','Gifts','Festivals','Special-Days'];
const settings = ['Profile','Account', 'Dashboard', 'Logout'];
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar pages={pages}/>
        <Routes>
          <Route path='/Cakes' element={<Cakes/>}/>
          <Route path='/Chocolates' element={<Chocolates/>}/>
          <Route path='/Icecreams' element={<Icecreams/>}/>
          <Route path='/Flowers' element={<Flowers/>}/>
          <Route path='/Gifts' element={<Gifts/>}/>
          <Route path='/Festivals' element={<Festivals/>}/>
          <Route path='/Special-Days' element={<SpecialDays/>}/>
          <Route path='/Occassions' element={<Occassions/>}/>
          <Route path='/Anniversary' element={<Anniversary/>}/>
          <Route path='/Birthday' element={<Birthday/>}/>
          <Route path='/Decoration' element={<Decoration/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cart/order-summary' element={<OrderSummary/>}/>
          <Route path='*' element={<NoMatch/>}/>
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
