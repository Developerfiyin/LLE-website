import Header from './Components/Header'
import Hero from './Components/hero'
import Event from './Components/event'
import Logo from './Components/logo'
import Vision from './Components/vision'
import  About from './Components/about'
import './App.css'
import Activities from './Components/Activities'
import Testimonials from './Components/Testimonials'
import Contact from './Components/contact'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'

const App =() => {
return (
  <>
  <Header/>

  <section id='home'>
  <Hero/>
  </section>

   <section id='event'>
      <Event/>
    </section>
 
        <Logo/>  

    <section id='vision'>
         <Vision/>
     </section>

  <Activities/>
   <Testimonials/>

      <section id='contact'>
      <Contact/>
      </section>

   <Newsletter/>
   <Footer/>

  </>
)
}


export default App
