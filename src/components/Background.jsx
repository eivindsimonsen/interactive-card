import bgImageDesktop from "../assets/bg-main-desktop.png";
import bgImageMobile from "../assets/bg-main-mobile.png";

function Background() {
  return (
    <div className="bg-main-background">
      <img
        src={bgImageDesktop}
        alt=""
        className="bg-main-background-desktop"
      />
      <img
        src={bgImageMobile}
        alt=""
        className="bg-main-background-mobile"
      />
    </div>
  );
}

export default Background;
