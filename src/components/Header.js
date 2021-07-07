import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
               <h1>Web Development and Website Promotions</h1>
                <Typed
                    className="typed-text"
                    strings={["Wrap Design", "Web Development", "Speed Boats", "Cool"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header

