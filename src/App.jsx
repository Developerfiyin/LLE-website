import Header from './Components/header'
import Hero from './Components/hero'
import Event from './Components/event'
import Logo from './Components/logo'
import Vision from './Components/vision'
import  About from './Components/about'
import './App.css'

const App =() => {

  const sliders = [ 
    {
      id : "slider1", 
      Images : ["../assets/Rectangle 21.png",
        "../assets/Rectangle 22.png",
        "../assets/Rectangle 23.png",
        "../assets/Rectangle 24.png",
      ],
      direction : "left",
    },
    {
       id : "slider2",
       Images : [
        "../assets/Rectangle 21.png",
        "../assets/Rectangle 22.png",
        "../assets/Rectangle 23.png",
        "../assets/Rectangle 24.png",
       ],
       direction : " right" ,
    },
    {
        id : "slider3",
        Images : [
          "../assets/Rectangle 21.png",
          "../assets/Rectangle 21.png",
          "../assets/Rectangle 21.png",
          "../assets/Rectangle 21.png",
        ]
    }
  ]


return (
  <>
  <Header/>
  <Hero/>
   <Event/>
   <Logo/>
   <Vision/>
   <About/>
  </>
)
}


export default App
