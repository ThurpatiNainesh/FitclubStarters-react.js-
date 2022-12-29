import React from 'react'
import Header from '../Header/Header'
import"./Hero.css"
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
// import Heart from "../../assets/heart.png";
// import Calories from "../../assets/calories.png"
// import{motion} from "framer-motion"
const Hero = () => {
   // const transition ={type:"spring",duration:3}
   // const mobile= window.innerWidth<=768?true:false;
  return (
    <div className="hero" id="home">
        <div className="blur hero-blur"></div>
       <div className="left-h">
         <Header/>
         {/* best ad */}
         <div className="the-best-ad">
             {/* <motion.div>
               initial={{left:"238px"}}
               whileInView={{left:"8px"}}
               transition={{...transition}}
             </motion.div> */}
             <div>

             </div>
            <span>the best fittness club in the town</span>
         </div>
         {/* hero heading */}
         <div className="hero-text">
            <div>
            <span className='stroke-text'>Shape</span>
            <span>your</span>
            </div>
            <div>
            <span>ideal body</span>
            </div>
            <div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea cum totam veniam eos, omnis fugit laborum optio iste eius </span>
            </div>
            
         </div>
         {/* figure */}
          <div className="figures">
         <div><span>+135</span><span>expert coach</span></div>
         <div><span>+566</span><span>members joined</span></div>
         <div><span>+677</span><span>fittness program</span> 
         </div>
         </div>
         {/* hero butons */}
         <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">learn more</button>
         </div>
       </div>
       <div className="right-h">
        <button className="btn">join now</button>
        {/* <div className="heart-rate">
            <img src={Heart}alt="" />
            <span>Heart rate </span>
            <span>116 bpm</span>
        </div> */}
        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image'/>
        <img src={hero_image_back} alt="" className='hero-image-back' />
        {/* calories */}
        {/* <div className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories</span>
            <span>220 kcal</span>
            </div>
        </div> */}
       </div>
    </div>
    
  )
}

export default Hero
