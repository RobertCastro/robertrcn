import './App.css';
import 'bulma/css/bulma.min.css';
import Home from './pages/Home/Index';
import Blog from './pages/Blog/Index';
import { Routes, Route} from "react-router-dom";
import NotFound from './pages/NotFound';

function App() {

  return (

    <div className='container'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        { /* Catch all route */}
        <Route path="/blog/*" component={NotFound} status={404} />
        {/* <Redirect to="/404" /> */}

      </Routes>
      
    </div>
    
  );
}

export default App;
