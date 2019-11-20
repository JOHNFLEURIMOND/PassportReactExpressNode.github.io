import React from "react";
import IconLink from "../buttons/IconLink";
import Github from "../../res/footer-github.png";
import YouTube from "../../res/footer-youtube.png";
import { Animated } from "react-animated-css";
//import { useSpring, animated } from "react-spring";



// const calc = (x, y) => [
//     -(y - window.innerHeight / 2) / 20,
//     (x - window.innerWidth / 2) / 20,
//     1.1
//   ];
//   const trans = (x, y, s) =>
//     `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const Footer = () => {
    // const [props, set] = useSpring(() => ({
    //     xys: [0, 0, 1],
    //     config: { mass: 5, tension: 350, friction: 40 }
    //   }));
    return (
        <div className="footer">
           
            <Animated
              animationInDelay={700}
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible
            >
          <span className="ta-c p-h200 t--intro" style={{color: "white"}}>
                Developed by John Fleurimond© 2019
            </span>
            <IconLink
                href={"https://github.com/rmbh4211995/passport-react"}
                icon={Github}
                title="Github"
                className="social-icon"
                buttonStyle={{ verticalAlign: "sub" }}
                />

            
            <IconLink
                href={"https://youtu.be/A23O4aUftXk"}
                icon={YouTube}
                title="YouTube"
                className="social-icon"
                buttonStyle={{ verticalAlign: "sub" }}
                    />
            </Animated>
                
        </div>
    );
};

export default Footer;