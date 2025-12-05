// import Button from './components/Button'
// import Products from './components/Products'
import ToDoList from '../pages/ToDoList';
import Authpage from '../pages/AuthPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';

function App(/*{children}*/) {
  // const [count,setcount] = useState(0);
  //  function decrement(){
  //   if(count===0){
  //     return;
  //   }
  //   setcount(count-1);
  // }
  // function increment(){
  //   setcount(count+1);
  // }
  return (
    // <div className="flex flex-wrap justify-center items-center" >
    //   <div className="m-4 text-center text-4xl text-black" style={{display: "block",width: "100%"}} ><h2>Block Buster Deals | Shop Now</h2></div>
    // <Products  title="Logitech Mx Master" index = {0}  />
    // <Products title="Apple pencil [2nd Gen]" index = {1}  />
    // <Products title="Zebronics Zeb-Transform" index = {2}  />
    // <Products title="Petronices Tod 23" index = {3}  />
    // </div>
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Authpage /*value={{ count, setcount, increment, decrement }}*/ />} />
          <Route path='/todolist' element={<ToDoList /*value={{ count, setcount, increment, decrement }} */ />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App