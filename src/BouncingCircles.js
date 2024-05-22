import React from 'react';
import { useSpring, animated } from 'react-spring';

const BouncingElement = ({ children }) => {
  const props = useSpring({
    to: { transform: 'translateY(0px)' },
    from: { transform: 'translateY(-30px)' },
    config: { tension: 170, friction: 12 },
    reset: true,
    reverse: true,
    loop: true,
  });

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
};

export default BouncingElement;
