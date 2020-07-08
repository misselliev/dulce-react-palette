import React from 'react';

const Dashboard() = () => {
  function randomColor() {
  var golden_ratio_conjugate = 0.618033988749895,
      h = (Math.random() + golden_ratio_conjugate) % 1 *360,
      rgb = hsvToRgb(h, 50, 95);
  return rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+");
}

function hsvToRgb(h, s, v){
  var chroma = s * v / 10000,
      min = v / 100 - chroma,
      hdash = h / 60,
      x = chroma * (1 - Math.abs(hdash % 2 - 1)),
      r = 0, g = 0, b = 0;

  if(hdash < 1 ){
          r = chroma;
        g = x;
  } else if (hdash < 2){
          r = x;
        g = chroma;
  } else if (hdash < 3){
          g = chroma;
        b = x;
  } else if (hdash < 4){
          g = x;
        b = chroma;
  } else if (hdash < 5){
          r = x;
        b = chroma;
  } else if (hdash <= 6){
          r = chroma;
        b = x;
  }

  r += min;
  g += min;
  b += min;

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

  return (
    <div>
      
    </div>
  )
}

export default Dashboard;
