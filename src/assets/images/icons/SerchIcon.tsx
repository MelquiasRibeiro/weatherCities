import React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearcIcon() {
  return (
    <Svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <Path
        fill="#F5F5F5"
        d="M17.28 16.253l-5.022-5.029a6.791 6.791 0 001.586-4.365C13.844 3.076 10.74 0 6.925 0 3.11 0 0 3.08 0 6.863c0 3.783 3.102 6.86 6.918 6.86a6.934 6.934 0 004.297-1.487l5.039 5.043a.706.706 0 001.025 0 .708.708 0 000-1.026zM1.47 6.863c0-2.972 2.446-5.388 5.448-5.388 3.002 0 5.448 2.416 5.448 5.388S9.92 12.25 6.918 12.25c-3.002 0-5.448-2.42-5.448-5.388z"
      />
    </Svg>
  );
}

export default SearcIcon;
