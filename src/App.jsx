import './App.css';
import 'bulma/css/bulma.min.css';
import Home from './pages/Home/Index';
import Blog from './pages/Blog/Index';
import { Routes, Route} from "react-router-dom";
import NotFound from './pages/NotFound';

function App() {

  return (

    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path="/blog/*" component={NotFound} status={404} />
      </Routes>
      
    </div>
    
  );
}

export default App;
