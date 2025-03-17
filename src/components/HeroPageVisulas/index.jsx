import "./styles.css";
import arcs from ".//imgVisuals/arcs.png";
import bright from ".//imgVisuals/bright.png";
import security from ".//imgVisuals/security.png";
import settings from ".//imgVisuals/settings.png";

export default function HeroPageVisuals() {
  return (
    <div className="heroVisuals">
      <div className="firstVisual">
        <img src={bright} alt="" />
      </div>
      <div className="SecondVisual">
        <img src={security} alt="" />
      </div>
      <div className="ThirdVisual">
        <img src={settings} alt="" />
      </div>
      <div className="FourthVisual">
        <img src={arcs} alt="" />
      </div>
    </div>
  );
}
