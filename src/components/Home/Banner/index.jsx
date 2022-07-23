import React from "react";
import "./styles.css";
import bannerImg from "./banner.png";
import Logo from "../../common/Logo/index";

const Banner = ({handleScrollMenu}) => (
  <header>
    <div className="headerContent">
        <Logo/>
        <div className="contentMain">
            <h1>Delicious food for your cravings</h1>
            <p>We made fresh and healthy meals with different recipes</p>
            <button onClick={handleScrollMenu}>View Menu <i className="fas fa-long-arrow-alt-right"></i></button>
        </div>
    </div>
    <img src={bannerImg} alt="banner" className="headerImg"></img>
  </header>
);

export default Banner;
