import "./styles.css";
import arcs from ".//imgVisuals/arcs.png";
import bright from ".//imgVisuals/bright.png";
import security from ".//imgVisuals/security.png";
import settings from ".//imgVisuals/settings.png";
import {motion} from "framer-motion";

export default function HeroPageVisuals() {
  return (
    <motion.div className="heroVisuals"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.div className="firstVisual"
        initial={{  y: -10, rotateY: 35 }}
        animate={{   y: 0, rotateY: 0 }}
        //loop
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 1, ease: "easeInOut" }}
        
      >
        <img src={bright} alt="" />
      </motion.div>
      <motion.div className="SecondVisual"
        initial={{  y: -10, rotateY: -25, rotateX: -15 }}
        animate={{   y: 0, rotateY: 0, rotateX: 0 }}
        
        //loop
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <img src={security} alt="" />
      </motion.div>
      <motion.div className="ThirdVisual"
        initial={{  y: -10, rotateY: -25, rotateX: 15 }}
        animate={{   y: 0, rotateY: 0, rotateX: 0 }}
        
        //loop
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <img src={settings} alt="" />
      </motion.div>
      <motion.div className="FourthVisual"
      
      initial={{  y: -10, rotateY: -25, rotateX: 15 }}
      animate={{   y: 0, rotateY: 0, rotateX: 0 }}
      
      //loop
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
        <img src={arcs} alt="" />
      </motion.div>
    </motion.div>
  );
}
