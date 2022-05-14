import './App.css';
import 'bulma/css/bulma.min.css';
import Home from './pages/Home/Index';
import Blog from './pages/Blog/Index';
import { Routes, Route} from "react-router-dom";

function App() {

  return (

    <div className='container'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
      
    </div>
    
  );
}

export default App;
