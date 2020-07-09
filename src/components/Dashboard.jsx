/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
import React from 'react';
import ColorCard from './ColorCard';

const Dashboard = () => {
  const colorArray = [];
  function hsvToRgb(hue, saturation, value) {
    const chroma = saturation * value / 10000;
    const min = value / 100 - chroma;
    const hdash = hue / 60;
    const x = chroma * (1 - Math.abs(hdash % 2 - 1));
    let r = 0; let g = 0; let
      b = 0;

    if (hdash < 1) {
      r = chroma;
      g = x;
    } else if (hdash < 2) {
      r = x;
      g = chroma;
    } else if (hdash < 3) {
      g = chroma;
      b = x;
    } else if (hdash < 4) {
      g = x;
      b = chroma;
    } else if (hdash < 5) {
      r = x;
      b = chroma;
    } else if (hdash <= 6) {
      r = chroma;
      b = x;
    }

    r += min;
    g += min;
    b += min;

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  function randomColor() {
    const GoldenRatioConjugate = 0.618033988749895;
    const h = (Math.random() + GoldenRatioConjugate) % 1 * 360;
    const rgb = hsvToRgb(h, 50, 95);
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  for (let i = 1; i <= 5; i++) {
    colorArray.push(randomColor());
  }

  return (
    <div className="ui container blue">
      <ColorCard colorArray={colorArray} />
    </div>
  );
};

export default Dashboard;
