import "./Home.css"
import man from "../../assets/man.png"
import Typewriter from "typewriter-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {

  useGSAP(()=>{
    let tl1=gsap.timeline()
    tl1.from(".line1",{
      y:80,
      opacity:0,
      duration:1
    })
    tl1.from(".line2",{
      y:80,
      opacity:0,
      duration:1
    })
    tl1.from(".line3",{
      y:80,
      opacity:0,
      duration:1
    })
    gsap.from(".righthome img",{
      x:200,
      opacity:0,
      duration:1
    })
  })

  return (
    <div id="home">
        <div className="lefthome">
          <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">LAKSHMI SINGH</div>
            <div className="line3">
              <Typewriter
               options={{
                strings: ["WEB DEVELOPER", "SOFTWARE DEVELOPER", "FRONTEND DEVELOPER"],
                autoStart: true,
                loop: true,
                cursor:"|"
              }}
              />
            </div>
            <button>HIRE ME</button>
          </div>
        </div>
        <div className="righthome">
          <img src={man} alt="Man" />
        </div>
    </div>
  )
}

export default Home