import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import food1 from './assets/food1.svg'
import food2 from './assets/food2.svg'
import food3 from './assets/food3.svg'
import food4 from './assets/food4.svg'

function App() {

  const data = [
    {food: food1, name: 'Smashed Avo'},
    {food: food2 , name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
    {food: food1, name: 'Smashed Avo'},
    {food: food2 , name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
    {food: food1, name: 'Smashed Avo'},
    {food: food2 , name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
    {food: food1, name: 'Smashed Avo'},
    {food: food2 , name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
    {food: food1, name: 'Smashed Avo'},
    {food: food2 , name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
    {food: food1, name: 'Smashed Avo'},
    {food: food2 , name: 'Yin & Yang'},
    {food: food3, name: 'Pancakes'},
    {food: food4, name: 'Huevos Rancheros'},
  ]


  return (
    <div className="App">

      <Router>
        
        <Routes>
          <Route path='/' element={<Homepage/> } />
          <Route path='/menu' element={<Menu data={data} /> } />
          <Route path='/cart' element={<Cart/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
