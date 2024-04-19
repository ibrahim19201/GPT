import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import Cta from './components/cta/Cta';
import Feature from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';
import Blog from './containers/blog/Blog';
import Features from './containers/features/Features';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Possibility from './containers/possibility/Possibility';
import WhatGPT3 from './containers/whatGPT3/WhatGTP3'

import './index.css'
import './App.css'

const App = () => {
  return (
    <>
    <div className='App'>
<div className='gradient__bg'>
      <Navbar/>
      <Header/>
</div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>









  
  
  
  









    </>
  )
}

export default App