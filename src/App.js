import './App.css';
import './index.css';

import { NavBar, Brand , Cta } from './components';
import { Blog, Features, Footer, Header, Possibility, Whatgpt3 } from './containers';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar/>
        <Header/>
      </div>  
        <Brand/>
        <Whatgpt3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    
    );
}

export default App;
