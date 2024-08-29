// src/components/FloatingShapes.js
import React from 'react';
import { motion } from 'framer-motion';

// Define your SVG shapes inline or import them if they are in separate files
const Shape1 = () => (
    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%" />
          <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M21.8,-25.3C29,-24.9,35.9,-19.4,35.4,-13.3C35,-7.2,27.2,-0.4,23.8,7C20.4,14.4,21.3,22.5,18,25.8C14.8,29,7.4,27.5,0,27.5C-7.4,27.5,-14.8,29,-22.1,27.1C-29.4,25.1,-36.6,19.7,-35,13.9C-33.3,8.2,-22.8,2.1,-19.9,-6.3C-16.9,-14.7,-21.5,-25.3,-19.5,-27.4C-17.4,-29.5,-8.7,-23.1,-0.7,-22.1C7.4,-21.2,14.7,-25.8,21.8,-25.3Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{ transition: '0.3s' }}
      />
    </svg>
  );

  const LineShape = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1014&quot;)" fill="none">
        <path d="M157.46 664.46C274.73 662.69 379.94 520.52 603.96 520.46 827.98 520.4 827.21 590.46 1050.46 590.46 1273.71 590.46 1383.97 520.67 1496.96 520.46" stroke="rgba(211, 125, 11, 0.58)" stroke-width="2"></path>
        <path d="M255.51 607.36C385.82 584.54 444.2 265.25 655.92 261.42 867.65 257.59 856.13 331.42 1056.34 331.42 1256.54 331.42 1355.13 261.68 1456.75 261.42" stroke="rgba(211, 125, 11, 0.58)" stroke-width="2"></path>
        <path d="M105.03 615.17C292.06 609.28 422.6 334.54 794.55 324 1166.5 313.46 1299.11 59.9 1484.07 55.2" stroke="rgba(211, 125, 11, 0.58)" stroke-width="2"></path>
        <path d="M355.24 560.47C549.12 519.81 633.08 18.97 931.25 16.3 1229.43 13.63 1351.79 247.03 1507.27 251.5" stroke="rgba(211, 125, 11, 0.58)" stroke-width="2"></path>
        <path d="M480.12 598.7C584.48 595.71 672.23 441.14 866.82 441 1061.41 440.86 1060.17 511 1253.52 511 1446.87 511 1541.97 441.28 1640.22 441" stroke="rgba(211, 125, 11, 0.58)" stroke-width="2"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1014">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
    </defs>
</svg>
  )

  const Shape2 = () => (
    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%" />
          <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M12.6,-12.3C19.4,-5.7,30.2,-2.9,30.2,0C30.1,2.8,19.3,5.6,12.4,10.4C5.6,15.1,2.8,21.8,-1.6,23.5C-6.1,25.1,-12.1,21.6,-12.5,16.9C-12.9,12.1,-7.5,6.1,-7.7,-0.2C-7.9,-6.4,-13.6,-12.9,-13.2,-19.4C-12.9,-25.9,-6.4,-32.6,-1.8,-30.8C2.9,-29,5.7,-18.8,12.6,-12.3ZM21.8,-25.3C29,-24.9,35.9,-19.4,35.4,-13.3C35,-7.2,27.2,-0.4,23.8,7C20.4,14.4,21.3,22.5,18,25.8C14.8,29,7.4,27.5,0,27.5C-7.4,27.5,-14.8,29,-22.1,27.1C-29.4,25.1,-36.6,19.7,-35,13.9C-33.3,8.2,-22.8,2.1,-19.9,-6.3C-16.9,-14.7,-21.5,-25.3,-19.5,-27.4C-17.4,-29.5,-8.7,-23.1,-0.7,-22.1C7.4,-21.2,14.7,-25.8,21.8,-25.3Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{ transition: '0.3s' }}
      />
    </svg>
  );

  const Shape3 = () => (
    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%" />
          <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M11.2,-17.1C15.4,-14.8,20.1,-13.1,23.1,-9.6C26.2,-6.2,27.5,-1,29.2,6C31,12.9,33.1,21.7,29.3,24.6C25.6,27.5,15.9,24.4,8.2,25.6C0.5,26.8,-5.3,32.2,-12,33.6C-18.8,35,-26.5,32.3,-27.6,26.5C-28.6,20.6,-22.9,11.5,-23.6,3.7C-24.2,-4.1,-31.1,-10.7,-31.7,-16.6C-32.3,-22.4,-26.6,-27.5,-20.3,-28.8C-14,-30.1,-7,-27.6,-1.7,-25C3.6,-22.3,7.1,-19.4,11.2,-17.1ZM12.6,-12.3C19.4,-5.7,30.2,-2.9,30.2,0C30.1,2.8,19.3,5.6,12.4,10.4C5.6,15.1,2.8,21.8,-1.6,23.5C-6.1,25.1,-12.1,21.6,-12.5,16.9C-12.9,12.1,-7.5,6.1,-7.7,-0.2C-7.9,-6.4,-13.6,-12.9,-13.2,-19.4C-12.9,-25.9,-6.4,-32.6,-1.8,-30.8C2.9,-29,5.7,-18.8,12.6,-12.3ZM21.8,-25.3C29,-24.9,35.9,-19.4,35.4,-13.3C35,-7.2,27.2,-0.4,23.8,7C20.4,14.4,21.3,22.5,18,25.8C14.8,29,7.4,27.5,0,27.5C-7.4,27.5,-14.8,29,-22.1,27.1C-29.4,25.1,-36.6,19.7,-35,13.9C-33.3,8.2,-22.8,2.1,-19.9,-6.3C-16.9,-14.7,-21.5,-25.3,-19.5,-27.4C-17.4,-29.5,-8.7,-23.1,-0.7,-22.1C7.4,-21.2,14.7,-25.8,21.8,-25.3Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{ transition: '0.3s' }}
      />
    </svg>
  );


// Add more shapes if needed



const FloatingShapes = () => {
  return (
<div className="absolute inset-0">
    <div className="absolute inset-0 overflow-hidden">
    <motion.div
    className="absolute top-0 left-0 w-full h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Centered and Large Shape */}
    <motion.div
      className="absolute"
      initial={{ scale: 2, opacity: 0.5 }}
      style={{ top: '50%', left: '50%', width: '50%' }}
    >
      <Shape1 />
    </motion.div>

    {/* Random Location Shape 2 */}
    <motion.div
      className="absolute"
      initial={{ scale: 1, x: 0, y: 0, rotate: 0 }}
      animate={{ scale: [1, 0.9, 1], x: [0, 50, -50, 0], y: [0, -30, 30, 0], rotate: [0, 15, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      style={{ top: '20%', left: '10%', width: '25%' }}
    >
      <Shape2 />
    </motion.div>

    {/* Random Location Shape 3 */}
    <motion.div
      className="absolute"
      initial={{ scale: 1, x: 0, y: 0, rotate: 0 }}
      animate={{ scale: [1, 1.1, 1], x: [0, -40, 40, 0], y: [0, 40, -40, 0], rotate: [0, -10, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      style={{ bottom: '15%', right: '25%', width: '30%' }}
    >
      <Shape3 />
    </motion.div>
  </motion.div>
    <LineShape/>


    </div>
  </div>
  );
};

export default FloatingShapes;
