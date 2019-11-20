import React from "react";
import { useSpring, animated } from "react-spring";
//import { Animated } from "react-animated-css";



const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const Card = ({ img, name, href, color }) => {
    const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
      }));
    return (
     
        <div
            className="card"
            style={{ border: `1px solid ${color}`, borderRadius: 2 , margin: "1 em"}}
            onClick={() => window.location = href}
        >
               <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
            <div>
                <p style={{ margin: 0, textAlign: "center", padding: "5px 0px 5px 10px" }} className="ta-c p-h200 t--intro">
                    {NAME}
                </p>
            </div>
            <div
                style={{
                    minHeight: 100,
                    minWidth: 100,
                    background: `url("${img}") no-repeat center center / 50% ${color}`
                }}
            />
      </animated.div>

            </div>
            
    );
 };

export default Card;